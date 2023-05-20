'use client';

import React, { useContext, useEffect, useRef } from 'react';
import { EDITOR_JS_TOOLS } from '../tools';
import EditorJS from '@editorjs/editorjs';
import { Context } from '../Context/LoginContext';
import { Data } from '../CustomHooks/useGetData';
export default function Editor({ content, isActive }) {
  const ejInstance = useRef();
  const LoginContext = useContext(Context);
  const defaultTemplate = [
    {
      type: 'header',
      data: {
        text: 'This is the Title of the blog page',
      },
    },
    {
      type: 'image',
      data: {
        file: {
          url: 'https://wallpaperaccess.com/full/17597.jpg',
        },
        caption: 'Example Image Caption',
        withBorder: true,
        withBackground: false,
      },
    },
    {
      type: 'paragraph',
      data: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo repudiandae ut assumenda hic dolorum eum qui quis, maiores provident velit, deleniti esse dolores eligendi. Aut deserunt amet maiores praesentium.',
      },
    },
    {
      type: 'paragraph',
      data: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo repudiandae ut assumenda hic dolorum eum qui quis, maiores provident velit, deleniti esse dolores eligendi. Aut deserunt amet maiores praesentium.',
      },
    },
  ];
  const initialContent = {
    blocks: defaultTemplate,
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
      data: initialContent,
    });
  };
  useEffect(() => {
    ejInstance.current?.blocks.clear();
    ejInstance.current?.blocks.render(content);
  }, [content]);
  useEffect(() => {
    const resp = async () => {
      if (!isActive) {
        console.log("I'm Here");
        let content = await ejInstance.current?.saver.save();
        let blocks = Object.values(content).map((elem) => JSON.stringify(elem));
        const data = new Data((error) => alert(error));
        await data.addData('articles', {
          content: blocks,
          author: LoginContext.user.uid,
          date: new Date(),
        });
      }
    };
    resp();
  }, [isActive]);
  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }
    return async () => {
      if (LoginContext.user) {
        let content = await ejInstance.current?.saver.save();
        const data = new Data((error) => alert(error));
        await data.addData('articles', {
          content: Object.values(content),
          author: LoginContext.user.uid,
          date: new Date(),
        });
      }
      ejInstance.current?.destroy();
      ejInstance.current = null;
    };
  }, []);
  return <div id="editorjs"></div>;
}
