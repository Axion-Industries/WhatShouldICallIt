export function extractKeywords(description: string): string[] {
  const words = description.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);
    
  const commonWords = ['that', 'this', 'with', 'from', 'they', 'have', 'will', 'your', 'what', 'when', 'where', 'would', 'there', 'could', 'other'];
  return words.filter(word => !commonWords.includes(word)).slice(0, 10);
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const nameStyles = {
  creative: 'Creative and unique combinations',
  professional: 'Business-focused and formal',
  playful: 'Fun and memorable names',
  modern: 'Tech-forward and contemporary',
  classic: 'Traditional and timeless'
};

export const industries = {
  tech: 'Technology',
  finance: 'Finance',
  health: 'Healthcare',
  retail: 'Retail',
  education: 'Education',
  other: 'Other'
};
