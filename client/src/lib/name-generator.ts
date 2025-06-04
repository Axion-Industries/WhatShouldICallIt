export function extractKeywords(description: string): string[] {
  const words = description.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2);
    
  const commonWords = ['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'man', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'its', 'let', 'put', 'say', 'she', 'too', 'use', 'that', 'this', 'with', 'from', 'they', 'have', 'will', 'your', 'what', 'when', 'where', 'would', 'there', 'could', 'other', 'should', 'people', 'service', 'business', 'company', 'create', 'build', 'make', 'help', 'provide', 'offer'];
  
  // Prioritize longer, more specific words
  const filtered = words.filter(word => !commonWords.includes(word));
  const sorted = filtered.sort((a, b) => {
    // Prioritize longer words and words that appear in business contexts
    const businessWords = ['tech', 'digital', 'smart', 'platform', 'solution', 'system', 'app', 'software', 'data', 'cloud', 'mobile', 'web', 'online', 'network', 'secure', 'fast', 'easy', 'simple'];
    const aScore = (businessWords.includes(a) ? 10 : 0) + a.length;
    const bScore = (businessWords.includes(b) ? 10 : 0) + b.length;
    return bScore - aScore;
  });
  
  return sorted.slice(0, 12);
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
