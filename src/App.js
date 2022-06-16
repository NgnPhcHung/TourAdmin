import Home from './component/Home';
import SideBar from './component/Sidebar';
import Scrollbar from 'react-smooth-scrollbar';

function App() {
    return (
        <div className='App'>
            <Scrollbar
                style={{ height: '100vh' }}
                damping={0.07}
                renderByPixels={true}
                plugins={{
                    // disableScroll: { direction: 'x' },
                    overscroll: { effect: 'bounce', damping: 0.12 },
                }}
            >
                <Home />
            </Scrollbar>
        </div>
    );
}

export default App;
