import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import AddNewBlog from './components/AddNewBlog'
import Blogs from './components/Blogs'
import blogService from './services/blogs'
import Notification from './components/Notification'
import Button from './components/Button'
import LoginForm from './components/LoginForm'
import loginService from './services/login'
import './App.css'



const App = () => {
  const [ blogs, setBlogs] = useState([]) 
  const [ newTitle, setNewTitle ] = useState('')
  const [ newAuthor, setNewAuthor ] = useState('')
  const [ newUrl, setNewUrl ] = useState('')
  const [ newLike, setNewLike ] = useState('')
  const [ blogsToShow, setBlogsToShow] = useState(blogs)
  const [ message, setMessage] = useState(null)
  const [ notClass, setNotClass] = useState(null)
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => {
        setBlogs(initialBlogs)
        console.log(initialBlogs)
        setBlogsToShow(initialBlogs)
      })
      .catch(error => {
        showMessage(`Error caught: ${error}`, 'error')
      })
    
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      showMessage('wrong credentials', 'error')
    }
  }

  const handleLogout = () => {
    console.log('logging out')
    setUser(null)
    window.localStorage.clear()
  }
  

  const handleAddClick = async (e) => {
    e.preventDefault()
    if(newTitle === '') {
      showMessage('Input title', 'error')
    }
    else if (newAuthor === '') {
      showMessage('Input author', 'error')
    }
    else if (newUrl === '') {
      showMessage('Input url', 'error')
    } else {
      let newObject = {
        title: newTitle,
        author: newAuthor,
        url: newUrl,
        likes: 0
      }
      console.log('step0');

      const newBlog = await blogService.create(newObject)
      console.log(newBlog)
      
      setBlogs(blogs.concat(newBlog.savedBlog))
      setBlogsToShow(blogs.concat(newBlog.savedBlog))
      showMessage(`Added ${newTitle}`, 'success')
/*       blogService
        .create(newObject)
        .then(returnedBlog => {
          console.log(returnedBlog);
          
          setBlogs(blogs.concat(returnedBlog))
          setBlogsToShow(blogs.concat(returnedBlog))
          resetForm()
          showMessage(`Added ${newTitle}`, 'success')
        })
        .catch(error => {
          console.log(error.response.data)
          showMessage(`${error.response.data.error}`, 'error')
        }) */
    }
  }

  const handleDeleteClick = (id, title) => {
    let message = `Do you really want to delete ${title}?`
    if(window.confirm(message)){
      blogService
        .deleteBlog(id)
        .then(res => {
          setBlogs(blogs.filter(b => b.id !== id))
          setBlogsToShow(blogs.filter(b => b.id !== id))
        })
        .catch(error => {
          showMessage(`${title} has already been removed from the server`, 'error')
        })
    }
  }

  const handleLikeClick = (blog) => {
    const updatedObject = {
      ...blog,
      likes: blog.likes += 1
    }

    blogService
      .update(updatedObject)
      .then(() => {
        setBlogs(blogs)
        showMessage(`You liked ${updatedObject.title}`, 'success')
      })
  }

  const resetForm = () => {
    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
    setNewLike('')
    document.getElementById('titleInput0').value = ''
    document.getElementById('authorInput0').value = ''
    document.getElementById('urlInput0').value = ''
  }

  const showMessage = (msg, msgClass) => {
    setMessage(msg)
    setNotClass(msgClass)
    setTimeout(() => {
      setMessage(null)
      setNotClass(null)
    }, 5000)
  }

  const handleFilterOnChange = (e) => {
    const filtered = blogs.filter(blog => blog.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setBlogsToShow(filtered)
    //setBlogs(filtered)
  }

  const handleAddTitleOnChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleAddAuthorOnChange = (e) => {
    setNewAuthor(e.target.value)
  }

  const handleAddUrlOnChange = (e) => {
    setNewUrl(e.target.value)
  }

  if (user === null) {
    return (
      <div>
        <Header text={'Bloglist'} />
        <Notification message={message} notClassName={notClass} />
        <LoginForm 
          handleLogin={handleLogin}
          username={username}
          setUsername={setUsername} 
          password={password}
          setPassword={setPassword}
        />
      </div>
    )
  }

  return (
    <div>
      <Header text={'Bloglist'} />
      <Notification message={message} notClassName={notClass} />
      <p>{user.name} logged in</p><Button text={"logout"} handleClick={handleLogout} />
      <AddNewBlog 
        handleAddTitleOnChange={handleAddTitleOnChange} 
        handleAddAuthorOnChange={handleAddAuthorOnChange}
        handleAddUrlOnChange={handleAddUrlOnChange}
        handleAddClick={handleAddClick}
      />
      <Filter handleFilterOnChange={handleFilterOnChange} />
    
      <Blogs blogs={blogsToShow} handleDeleteClick={handleDeleteClick} handleLikeClick={handleLikeClick} />      
    </div>
  )
}

export default App