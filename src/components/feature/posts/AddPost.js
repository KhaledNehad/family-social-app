import React, { useEffect, useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

const AddPost = ({ onAdd }) => {
  const [post, setPost] = useState('');
  const [showMessage, setShowMessage] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!post) {
      alert('Please enter a text');
    } else {
      onAdd({ post });
      setShowMessage(false);
      setTimeout(() => {
        setShowMessage(true);
      }, 3000);
      setPost('');
    }
  };

  useEffect(() => {}, []);

  return (
    <Form success onSubmit={handleSubmit}>
      <Form.TextArea
        label='Shoutbox!'
        placeholder='Write something...'
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <Message
        hidden={showMessage}
        success
        header='Post Completed!'
        content='Your thoughts are shared with your friends'
      />

      <Button primary>Post</Button>
    </Form>
  );
};

export default AddPost;
