import React from 'react';
import Header2 from './Header2';
import Button from './Button';

const Blogs = (props) => {
    return (
        <>
          <Header2 text={'Blogs'} />
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>URL</th>
                <th>Likes</th>
                <th>Like</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.blogs.map((blog, i) => 
                <tr id={blog.id} key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.author}</td>
                  <td>{blog.url}</td>
                  <td>{blog.likes}</td>
                  <td><Button text='like' handleClick={() => props.handleLikeClick(blog)} /></td>
                  <td><Button text='delete' handleClick={() => props.handleDeleteClick(blog.id, blog.title)} /></td>
                </tr>
            )}
            </tbody>
            
          </table>
          
        </>
    )
}

export default Blogs