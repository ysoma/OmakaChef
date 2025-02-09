const Footer = () => {
    return (
        <footer className="text-center text-sm text-gray-600 py-4"
            dangerouslySetInnerHTML={{
                __html: `
                <!-- Rakuten Web Services Attribution Snippet FROM HERE -->
                <a href="https://developers.rakuten.com/" target="_blank">Supported by Rakuten Developers</a>
                <!-- Rakuten Web Services Attribution Snippet TO HERE -->
                `,
            }}
        />
    );
}

export default Footer;