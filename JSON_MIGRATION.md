# JSON Data Migration

## Overview

The site has been migrated from JavaScript object data to JSON file-based data management for better maintainability and separation of concerns.

## Changes Made

### Files Created:
- `data/site-data.json` - All site content in JSON format
- `assets/js/data-loader.js` - Async JSON data loader

### Files Updated:
- `assets/js/main.js` - Now loads data asynchronously from JSON
- `assets/js/resume.js` - Uses JSON data loader
- `index.html` - Updated to load data-loader.js instead of data.js
- `resume.html` - Updated to load data-loader.js instead of data.js
- `generate-pdf.js` - Enhanced to wait for JSON data loading

### Files Deprecated:
- `assets/js/data.js` - Replaced by JSON + data loader

## Benefits

✅ **Better Data Management**: JSON is easier to edit and validate
✅ **Separation of Concerns**: Data separate from JavaScript logic
✅ **API Ready**: JSON can be easily served by any backend
✅ **Tool Integration**: JSON works with more tools and editors
✅ **Type Safety**: JSON schema validation possible
✅ **Cleaner Code**: No mixed data/logic in JavaScript files

## Usage

### Updating Content

Edit `data/site-data.json` to update:
- Personal information
- About section
- Services
- Projects  
- Experience
- Skills
- Social links

### Adding New Sections

1. Add data to `site-data.json`
2. Update `assets/js/main.js` and `assets/js/resume.js` to use the new data
3. Add corresponding HTML elements and CSS

### Local Development

The JSON file is loaded via `fetch()`, so you need an HTTP server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js  
npx http-server . -p 8080

# Using the existing script
./generate-resume.sh
```

### JSON Structure

```json
{
  "personal": { ... },
  "about": { ... },
  "services": { ... },
  "projects": { ... },
  "experience": { ... },
  "sideProjects": { ... },
  "education": { ... },
  "skills": { ... },
  "socialLinks": [ ... ]
}
```

## Error Handling

The data loader includes fallback mechanisms:
- Tries relative path if main path fails
- Provides console error messages
- Graceful degradation if JSON fails to load

## Migration Notes

- All existing functionality preserved
- Same data structure maintained
- Backward compatibility ensured
- No breaking changes to site behavior

## Future Enhancements

Possible improvements:
- JSON schema validation
- Multiple language support
- Dynamic content management
- API endpoint integration
- Real-time content updates