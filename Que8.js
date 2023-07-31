async function fetchGooglePage() {
    const url = 'https://www.google.com';

    try {
        // Dynamically import the node-fetch module
        const fetch = await import('node-fetch');
        const response = await fetch.default(url);

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.text();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchGooglePage();

