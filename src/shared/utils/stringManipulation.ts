export const trimTextToFullSentence = (text, maxLength) => {
    if (text.length <= maxLength) return text; // If text is already shorter than the max length, return as is

    const trimmedText = text.substring(0, maxLength); // Trim to maxLength
    const lastDotIndex = trimmedText.lastIndexOf('.'); // Find the last period within that limit

    // If there's a dot in the trimmed section, return the text up to and including the last full stop
    if (lastDotIndex !== -1) {
        return trimmedText.substring(0, lastDotIndex + 1);
    } else {
        // If there's no dot, return the trimmed text with three dots
        return trimmedText + '...';
    }
};
