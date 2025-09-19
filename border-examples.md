# Border Size Examples for Section Boxes

## Current Setup:
```css
.about-me-section,
.education-section,
.current-role-section,
.experience-section {
  border: 4px solid #000000;  /* 4px black border */
}
```

## How to Change Border Size:

### Thin Border (2px):
```css
border: 2px solid #000000;
```

### Medium Border (4px) - Current:
```css
border: 4px solid #000000;
```

### Thick Border (6px):
```css
border: 6px solid #000000;
```

### Extra Thick Border (8px):
```css
border: 8px solid #000000;
```

## Border Color Options:

### Black (Current):
```css
border: 4px solid #000000;
```

### Dark Gray:
```css
border: 4px solid #333333;
```

### Blue:
```css
border: 4px solid #0066cc;
```

### Red:
```css
border: 4px solid #cc0000;
```

### Gradient Border (Advanced):
```css
border: 4px solid transparent;
background: linear-gradient(white, white) padding-box,
           linear-gradient(45deg, #000, #333, #000) border-box;
```

## Border Styles:

### Solid (Current):
```css
border: 4px solid #000000;
```

### Dashed:
```css
border: 4px dashed #000000;
```

### Dotted:
```css
border: 4px dotted #000000;
```

### Double:
```css
border: 6px double #000000;
```

## To Change Border Size:
1. Find the section in CSS: `.about-me-section, .education-section, .current-role-section, .experience-section`
2. Change the `border: 4px solid #000000;` line
3. Replace `4px` with your desired size (2px, 6px, 8px, etc.)