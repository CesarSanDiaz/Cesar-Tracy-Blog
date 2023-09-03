import { Button, Group, createStyles } from '@mantine/core';
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconBlockquote,
  IconBold,
  IconCircle,
  IconClearFormatting,
  IconCode,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
  IconItalic,
  IconLetterP,
  IconList,
  IconListNumbers,
  IconPencilMinus,
  IconStrikethrough,
} from '@tabler/icons-react';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './tipTapStyles.scss';

const useStyles = createStyles((theme) => ({
  editor: {
    color: theme.colorScheme === 'dark' ? theme.grey : theme.black,
  },
}));

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <Group className='menubar'>
        <Button
          size='xs'
          variant='light'
          p={0}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <IconBold />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <IconItalic />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <IconStrikethrough />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          <IconClearFormatting />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().clearNodes().run()}
        >
          <IconPencilMinus />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          <IconLetterP />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
          }
        >
          <IconH1 />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
          }
        >
          <IconH2 />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
          }
        >
          <IconH3 />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
          }
        >
          <IconH4 />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
          }
        >
          <IconH5 />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive('heading', { level: 6 }) ? 'is-active' : ''
          }
        >
          <IconH6 />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <IconList />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <IconListNumbers />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          <IconCode />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <IconBlockquote />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().setColor('#228be6').run()}
          className={
            editor.isActive('textStyle', { color: '#228be6' })
              ? 'is-active'
              : ''
          }
        >
          <IconCircle fill='#228be6' color='#228be6' />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().setColor('#FF0000').run()}
          className={
            editor.isActive('textStyle', { color: '#FF0000' })
              ? 'is-active'
              : ''
          }
        >
          <IconCircle fill='#FF0000' color='#FF0000' />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().setColor('#ffda53').run()}
          className={
            editor.isActive('textStyle', { color: '#ffda53' })
              ? 'is-active'
              : ''
          }
        >
          <IconCircle fill='#ffda53' color='#ffda53' />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().setColor('#2F2032').run()}
          className={
            editor.isActive('textStyle', { color: '#2F2032' })
              ? 'is-active'
              : ''
          }
        >
          <IconCircle fill='#2F2032' color='#2F2032' />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <IconArrowBackUp />
        </Button>
        <Button
          p={0}
          variant='light'
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <IconArrowForwardUp />
        </Button>
      </Group>
    </>
  );
};

const TipTap = ({ setDesc }) => {
  const { classes } = useStyles();
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    content: ``,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDesc(html);
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={classes.editor} />
    </div>
  );
};
export default TipTap;
