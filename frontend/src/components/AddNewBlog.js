import React from "react";
import Input from './Input';
import Button from './Button';
import Header2 from './Header2';

const AddNewBlog = (props) => {
    return (
        <>
            <Header2 text={'Add New Blog'} />
            <form>
                <div>
                    Title: <Input placeholder={'Title..'} handleOnChange={props.handleAddTitleOnChange} id={'titleInput0'} /><br />
                    Author: <Input placeholder={'Author..'} handleOnChange={props.handleAddAuthorOnChange} id={'authorInput0'} /><br />
                    Url: <Input placeholder={'Url..'} handleOnChange={props.handleAddUrlOnChange} id={'urlInput0'} />
                </div>
                <div>
                    <Button type={'submit'} handleClick={props.handleAddClick} text={'Add'} />
                </div>
            </form>
        </>
    )
}

export default AddNewBlog