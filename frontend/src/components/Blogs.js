import React from 'react';
import Header2 from './Header2';
import Button from './Button';
import Togglable from './Togglable';

const Blogs = (props) => {
    return (
        <>
          <Header2 text={'Blogs'} />
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {props.blogs.map((blog, i) => 
                <>
                  <tr id={blog.id} key={blog.id}>
                    <td>{blog.title}</td>
                    <td>
                      <Togglable buttonLabel={'View'} buttonHideLabel={'Hide Info'}>
                        <div>
                          <p>Author: {blog.author}</p>
                          <p>URL: {blog.url}</p>
                          <p>Likes: {blog.likes} <Button text='like' handleClick={() => props.handleLikeClick(blog)} /></p>
                          {blog.user ? <p>Added by: {blog.user.name}</p> : ''}
                          {blog.user ? (props.user.username === blog.user.username ? <Button text='Delete Blog' handleClick={() => props.handleDeleteClick(blog.id, blog.title)} /> : '') : ''}
                        </div>
                      </Togglable>
                    </td>
                  </tr>
                  
                </>
              )}
            </tbody>
            
          </table>
          
        </>
    )
}

export default Blogs