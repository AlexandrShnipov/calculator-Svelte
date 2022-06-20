var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/AlexandrShnipov/calculator-Svelte.git', // Update to point to your repository
        user: {
            name: 'Alex', // update to use your name
            email: 'alexandershnipov@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);