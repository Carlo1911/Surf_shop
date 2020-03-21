const faker = require('faker');
const Post = require('./models/post');

async function seedPosts(){
    await Post.remove({});
    for (const i of new Array(40)){
        const post = {
            title: faker.lorem.word(),
            description: faker.lorem.text(),
            author: {
                '_id': '5e73c424cd9624bde104ac74',
                'username': 'carlo'
              }
        }
        await Post.create(post);
    }
    console.log('40 new posts created!');
}

module.exports = seedPosts;