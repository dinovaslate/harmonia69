'use client';

import React, {useEffect, useRef} from 'react'
import { EDITOR_JS_TOOLS } from '../tools';
import EditorJS from '@editorjs/editorjs';
export default function Editor() {
  const ejInstance = useRef();  
  const initialContent = {
    blocks: [
      {
        type: 'header',
        data: {
          text: 'This is the Title of the blog page'
        }
      },
      {
        type: 'paragraph',
        data:{
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo repudiandae ut assumenda hic dolorum eum qui quis, maiores provident velit, deleniti esse dolores eligendi. Aut deserunt amet maiores praesentium.'
        }
      },
      {
        type: 'paragraph',
        data:{
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo repudiandae ut assumenda hic dolorum eum qui quis, maiores provident velit, deleniti esse dolores eligendi. Aut deserunt amet maiores praesentium.'
        }
      },
      {
        type: 'image',
        data:{
          url: 'https://wallpaperaccess.com/full/17597.jpg',
          caption: 'Example Image Caption',
          withBorder: true,
          withBackground: false,
        }
      }
    ]
  };
  const initEditor = () => {
    const editor = new EditorJS({
        holder: 'editorjs',
        onReady: () => {
            ejInstance.current = editor;
        },
        autofocus: true,
        onChange: async () => {
            let content = await editor.saver.save();
            console.log(content);
        },
        tools: EDITOR_JS_TOOLS,
        data: initialContent
    })
  }  
  useEffect(() => {
    if(ejInstance.current === null){
        initEditor();
    }
    return () => {
        ejInstance.current?.destroy();
        ejInstance.current = null;
    }
  }, [])
  return (
    <div id='editorjs'></div>
  )
}
