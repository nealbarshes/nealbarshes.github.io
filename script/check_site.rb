require "set"
require "uri"

root = File.expand_path("..", __dir__)
site = File.join(root, "_site")
abort("Build output not found: run bundle exec jekyll build first.") unless Dir.exist?(site)

errors = []
html_files = Dir.glob(File.join(site, "**", "*.html"))
html_files.each do |file|
  html = File.read(file, mode: "r:BOM|UTF-8")
  relative = file.delete_prefix(site + "/")

  ids = html.scan(/\bid=["']([^"']+)["']/i).flatten
  ids.group_by(&:itself).each { |id, values| errors << "#{relative}: duplicate id ##{id}" if values.length > 1 }

  html.scan(/<img\b([^>]*)>/i).each do |attrs|
    errors << "#{relative}: image missing alt text" unless attrs.first.match?(/\balt=["'][^"']*["']/i)
  end

  html.scan(/\b(?:href|src)=["']([^"']+)["']/i).flatten.each do |target|
    next if target.empty? || target.start_with?("#", "mailto:", "tel:", "data:", "javascript:")
    next if target.match?(%r{\Ahttps?://})
    path = target.split(/[?#]/, 2).first
    next if path.empty? || path.include?("{{")
    path = URI.decode_www_form_component(path) rescue path
    candidate = if path.start_with?("/")
      File.join(site, path.delete_prefix("/"))
    else
      File.expand_path(path, File.dirname(file))
    end
    candidates = [candidate]
    candidates << File.join(candidate, "index.html") if File.extname(candidate).empty?
    candidates << "#{candidate}.html" if File.extname(candidate).empty?
    errors << "#{relative}: missing internal target #{target}" unless candidates.any? { |item| File.exist?(item) }
  end
end

source_paths = Dir.glob(File.join(root, "{about,brochures,system-of-care,tutorials,works,assets}", "**", "*"))
source_paths.select { |path| File.file?(path) }.each do |path|
  relative = path.delete_prefix(root + "/")
  next if File.basename(relative) == "README.md"
  segments = relative.split("/")
  next if segments.all? { |segment| segment == "index.md" || segment.match?(/\A[a-z0-9][a-z0-9.-]*\z/) }
  errors << "#{relative}: published paths must use lowercase kebab-case"
end

if errors.empty?
  puts "Site checks passed (#{html_files.length} HTML files)."
else
  warn errors.sort.join("\n")
  abort("#{errors.length} site check(s) failed.")
end

