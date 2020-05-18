import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import AddNewBlog from './components/AddNewBlog'
import Blogs from './components/Blogs'
import blogService from './services/blogs'
import Notification from './components/Notification'
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
  

  const handleAddClick = (e) => {
    e.preventDefault()
    if(newTitle === '') {
      alert("Input Title")
    }
    else if (newAuthor === '') {
      alert("Input Author")
    }
    else if (newUrl === '') {
      alert("Input Url")
    } else {
      let newObject = {
        title: newTitle,
        author: newAuthor,
        url: newUrl,
        likes: 0
      }
/*       if(blogs.some(blog => blog.name === newName)) {
        let message = `${newName} is already in the phonebook. Do you want to replace the old number with a new one?`
        if(window.confirm(message)) {
          const per = persons.find(p => p.name === newName)
          const changedContact = { ...per, number: newNumber}
          
          blogService
            .update(per.id, changedContact)
            .then(returnedContact => {
              setPersons(persons.map(person => person.id !== per.id ? person : returnedContact))
              setPersonsToShow(persons.map(person => person.id !== per.id ? person : returnedContact))
              resetForm()
              showMessage(`Updated ${newName}`, 'success')
            })
            .catch(error => {
              console.log(error);
              console.log(per.id);
              
              setPersons(persons.filter(p => p.id !== per.id))
              setPersonsToShow(persons.filter(p => p.id !== per.id))
              showMessage(`${newName} has already been removed from the server`, 'error')
              
            })
        }
      } else { */
      console.log('step0');
      
      blogService
        .create(newObject)
        .then(returnedBlog => {
          setBlogs(blogs.concat(returnedBlog))
          setBlogsToShow(blogs.concat(returnedBlog))
          resetForm()
          showMessage(`Added ${newTitle}`, 'success')
        })
        .catch(error => {
          console.log(error.response.data)
          showMessage(`${error.response.data.error}`, 'error')
        })
      //}
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
    console.log('id', blog.id);
    console.log('title', blog.title);
    console.log('likes', blog.likes);
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

  return (
    <div>
      <Header text={'Bloglist'} />
      <Notification message={message} notClassName={notClass} />
      <Filter handleFilterOnChange={handleFilterOnChange} />
      <AddNewBlog 
        handleAddTitleOnChange={handleAddTitleOnChange} 
        handleAddAuthorOnChange={handleAddAuthorOnChange}
        handleAddUrlOnChange={handleAddUrlOnChange}
        handleAddClick={handleAddClick}
      />
      <Blogs blogs={blogsToShow} handleDeleteClick={handleDeleteClick} handleLikeClick={handleLikeClick} />
    </div>
  )
}

export default App