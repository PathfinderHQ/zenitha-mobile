export const getInitials = (name: string) => {
    // Split the name into separate words
    const words = name.split(' ');

    // Initialize an array to store the initials
    const initials = [];

    // Iterate over each word and extract the first character
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        // Extract the first character and convert it to uppercase
        if (word.length > 0) {
            const initial = word.charAt(0).toUpperCase();
            initials.push(initial);
        }
    }

    // Join the extracted initials
    return initials.join('');
};
