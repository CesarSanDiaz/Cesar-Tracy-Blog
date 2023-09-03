import { Button, Divider, TextInput, Title, createStyles } from '@mantine/core';
import { IconTag } from '@tabler/icons-react';
// import { EditorContent, useEditor } from '@tiptap/react';

import { useState } from 'react';
import TipTap from '../components/tiptap/TipTap';

const useStyles = createStyles((theme) => ({
  catDivider: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
  catTopIcon: {
    display: 'block',
    margin: 'auto',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.myYellow[7]
        : theme.colors.blue[6],
  },
}));

export default function Categories() {
  const { classes } = useStyles();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // const MenuBar = ({ editor }) => {
  //   if (!editor) {
  //     return null;
  //   }

  //   return (
  //     <>
  //       <button
  //         onClick={() => editor.chain().focus().toggleBold().run()}
  //         disabled={!editor.can().chain().focus().toggleBold().run()}
  //         className={editor.isActive('bold') ? 'is-active' : ''}
  //       >
  //         bold
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().toggleItalic().run()}
  //         disabled={!editor.can().chain().focus().toggleItalic().run()}
  //         className={editor.isActive('italic') ? 'is-active' : ''}
  //       >
  //         italic
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().toggleStrike().run()}
  //         disabled={!editor.can().chain().focus().toggleStrike().run()}
  //         className={editor.isActive('strike') ? 'is-active' : ''}
  //       >
  //         strike
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().toggleCode().run()}
  //         disabled={!editor.can().chain().focus().toggleCode().run()}
  //         className={editor.isActive('code') ? 'is-active' : ''}
  //       >
  //         code
  //       </button>
  //       <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
  //         clear marks
  //       </button>
  //       <button onClick={() => editor.chain().focus().clearNodes().run()}>
  //         clear nodes
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().setParagraph().run()}
  //         className={editor.isActive('paragraph') ? 'is-active' : ''}
  //       >
  //         paragraph
  //       </button>
  //       <button
  //         onClick={() =>
  //           editor.chain().focus().toggleHeading({ level: 1 }).run()
  //         }
  //         className={
  //           editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
  //         }
  //       >
  //         h1
  //       </button>
  //       <button
  //         onClick={() =>
  //           editor.chain().focus().toggleHeading({ level: 2 }).run()
  //         }
  //         className={
  //           editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
  //         }
  //       >
  //         h2
  //       </button>
  //       <button
  //         onClick={() =>
  //           editor.chain().focus().toggleHeading({ level: 3 }).run()
  //         }
  //         className={
  //           editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
  //         }
  //       >
  //         h3
  //       </button>
  //       <button
  //         onClick={() =>
  //           editor.chain().focus().toggleHeading({ level: 4 }).run()
  //         }
  //         className={
  //           editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
  //         }
  //       >
  //         h4
  //       </button>
  //       <button
  //         onClick={() =>
  //           editor.chain().focus().toggleHeading({ level: 5 }).run()
  //         }
  //         className={
  //           editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
  //         }
  //       >
  //         h5
  //       </button>
  //       <button
  //         onClick={() =>
  //           editor.chain().focus().toggleHeading({ level: 6 }).run()
  //         }
  //         className={
  //           editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
  //         }
  //       >
  //         h6
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().toggleBulletList().run()}
  //         className={editor.isActive('bulletList') ? 'is-active' : ''}
  //       >
  //         bullet list
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().toggleOrderedList().run()}
  //         className={editor.isActive('orderedList') ? 'is-active' : ''}
  //       >
  //         ordered list
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().toggleCodeBlock().run()}
  //         className={editor.isActive('codeBlock') ? 'is-active' : ''}
  //       >
  //         code block
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().toggleBlockquote().run()}
  //         className={editor.isActive('blockquote') ? 'is-active' : ''}
  //       >
  //         blockquote
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().setHorizontalRule().run()}
  //       >
  //         horizontal rule
  //       </button>
  //       <button onClick={() => editor.chain().focus().setHardBreak().run()}>
  //         hard break
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().undo().run()}
  //         disabled={!editor.can().chain().focus().undo().run()}
  //       >
  //         undo
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().redo().run()}
  //         disabled={!editor.can().chain().focus().redo().run()}
  //       >
  //         redo
  //       </button>
  //       <button
  //         onClick={() => editor.chain().focus().setColor('#958DF1').run()}
  //         className={
  //           editor.isActive('textStyle', { color: '#958DF1' })
  //             ? 'is-active'
  //             : ''
  //         }
  //       >
  //         purple
  //       </button>
  //     </>
  //   );
  // };

  // const editor = useEditor({
  //   content: `
  //       <p>
  //         If you want to check the state, you can call <code>editor.isEditable()</code>.
  //       </p>
  //     `,
  //   extensions: [
  //     Color.configure({ types: [TextStyle.name, ListItem.name] }),
  //     TextStyle.configure({ types: [ListItem.name] }),
  //     StarterKit.configure({
  //       bulletList: {
  //         keepMarks: true,
  //         keepAttributes: false, // TODO : Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
  //       },
  //       orderedList: {
  //         keepMarks: true,
  //         keepAttributes: false, // TODO : Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
  //       },
  //     }),
  //   ],
  //   onBlur: ({ editor }) => {
  //     const html = editor.getHTML();
  //     // send the content to an API here
  //     console.log(html);
  //     setDesc(html);
  //   },
  // });

  // useEffect(() => {
  //   const getCategories = async () => {
  //     try {
  //       const res = await axios.get(
  //         'http://localhost:5000/api/categories' + search
  //       );
  //       const namesToArray = Array.from(res.data.map((cat) => cat.name));
  //       setCategories(namesToArray);
  //       // const res = await axiosInstance.get('/categories');
  //       // setCategories(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getCategories();
  // }, [search]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get('http://localhost:5000/api/posts');
  //     // console.log(res.data[0].desc);
  //     setPostDesc(res.data[0].desc);
  //   };
  //   fetchPosts();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
    };
    console.log(post);
  };

  return (
    <div style={{ padding: '12px' }}>
      <IconTag size={50} className={classes.catTopIcon} />
      <Title order={2} align='center' p='xs'>
        Categories
      </Title>
      <Divider
        size={0}
        p='1.5px'
        mb='md'
        className={classes.catDivider}
        m='auto'
        w='25%'
      />
      <form onSubmit={handleSubmit}>
        <TextInput
          label='Title'
          required
          placeholder='Post Title'
          type='text'
          variant='filled'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <TipTap setDesc={setDesc} />
        <pre>{desc}</pre>
        <br />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}
