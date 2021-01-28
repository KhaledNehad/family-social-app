import React from 'react';
import { Comment, Divider } from 'semantic-ui-react';

const Comments = ({ commentsList }) => {
  return (
    <Comment.Group>
      {commentsList.map((comment) => {
        return (
          <Comment key={comment.id}>
            <Comment.Avatar as='a' src={comment.userImage} />
            <Comment.Content>
              <Comment.Author>{comment.username}</Comment.Author>
              <Comment.Metadata>
                <div>{comment.date}</div>
              </Comment.Metadata>
              <Comment.Text>{comment.text}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        );
      })}

      {/* <Form reply>
        <Form.TextArea />
        <Button
          content='Add Comment'
          labelPosition='left'
          icon='edit'
          primary
        />
      </Form> */}
    </Comment.Group>
  );
};

export default Comments;
