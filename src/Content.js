import './Content.css';

const Content = () => {

  const handleNameChanges = 'Peter';

  return (
    <main>
      <p className='mysample'>
        Hello {handleNameChanges}!
      </p>
    </main>
  )


}

export default Content;