import React, { useCallback, useEffect, useRef } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import './Blogs.css'

const  toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

const Blogs = () => {
   const wrapper = useCallback(wrapperRef =>{
         if(wrapperRef === null) return
         wrapperRef.innerHTML = ""
         const editor = document.createElement('div')
         wrapperRef.append(editor)
         new Quill(editor, {theme: 'snow', modules: {toolbar: toolbarOptions}})
         //fdddfdfdf
   },[])

   return (
    <div className="container" ref={wrapper} style={{height: "70vh", width: "100%"}}></div>
   )
}

export default Blogs