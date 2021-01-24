import React, { useState } from 'react';
import { Divider } from 'semantic-ui-react';
import AddPost from './AddPost';
import PostsList from './PostsList';

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: 10,
      name: 'Jenny Hess',
      image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
      date: '2021-01-21T12:59-0500',
      post: "Have you seen what's going on in Egypt? Can you believe it.",
      comments: []
    },
    {
      id: 11,
      name: 'Jenny Hess',
      image: 'https://react.semantic-ui.com/images/avatar/large/stevie.jpg',
      date: '2021-01-22T12:59-0500',
      post: "Have you seen what's going on in Egypt? Can you believe it.",
      comments: [
        {
          id: 12,
          username: 'Joe Henderson',
          userImage:
            'https://react.semantic-ui.com/images/avatar/large/stevie.jpg',
          text:
            'The hours, minutes and seconds stand as visible reminders that your effort put them all there.Preserve until your next run, when the watch lets you see how Impermanent your efforts are.',
          date: '1 day ago'
        },
        {
          id: 13,
          username: 'Khaled Nehad',
          userImage:
            'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
          text:
            'The hours, minutes and seconds stand as visible reminders that your effort put them all there.Preserve until your next run, when the watch lets you see how Impermanent your efforts are.',
          date: '2 days ago'
        }
      ]
    }
  ]);

  const addPost = (post) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const date = Date();
    const newPost = {
      ...post,
      id,
      date,
      name: 'Khaled Nehad',
      image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
    };
    setPosts([newPost, ...posts]);
  };
  return (
    <>
      <AddPost onAdd={addPost} />
      <Divider section />
      <PostsList posts={posts} />
    </>
  );
};

export default Posts;
