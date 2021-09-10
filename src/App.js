import MyButton from './elements/MyButton';
import MySection from './elements/MySection';
import MyHeader from './elements/MyHeader';
import MaterialButton from './elements/MaterialButton';
import PageWrapper from './elements/PageWrapper';
import { GreenTheme, BlueTheme } from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
function App() {

  const pages = [
    {
      title: 'page1',
      buttons: [
        { text: 'next' }
      ]
    },

    {
      title: 'page2',
      buttons: [
        { text: 'prev' },
        { text: 'next' }
      ]
    },
    {
      title: 'page3',
      buttons: [
        { text: 'prev' },
        { text: 'next' }
      ]
    },
    {
      title: 'page4',
      buttons: [
        { text: 'prev' }

      ]
    }
  ]
  const [id, setId] = useState(0);
  let pageDisplay = pages[id];
  const go = (index) => {
    if (id == 0 && index == 0) {
      setId(id + 1)
    } else if (index == 0) {
      setId(id - 1)
    } else {
      setId(id + 1)
    }
  }
  return (
    <ThemeProvider theme={GreenTheme}>
      <div>
        <MyHeader>{pageDisplay.title}</MyHeader>
        <PageWrapper pid={id} npages={pages.length}>
          {pageDisplay.buttons.map((button, i) => {
            return <MyButton key={i} onClick={() => go(i)}>{button.text}</MyButton>
          })}
        </PageWrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
