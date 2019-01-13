import React from 'react';
import QRCode from 'qrcode.react';

class App extends React.Component {
    state = {
        value: 'https://ei-sgallery-41a7f.firebaseapp.com/',
        size: 128,
        fgColor: '#000000',
        bgColor: '#ffffff',
        level: 'L',
        renderAs: 'svg',
        includeMargin: false,
    }

    render() {
        return (

            <div style={{margin:50}}> 
           
            <QRCode
                    value={this.state.value}
                    size={this.state.size}
                    fgColor={this.state.fgColor}
                    bgColor={this.state.bgColor}
                    level={this.state.level}
                    renderAs={this.state.renderAs}
                    includeMargin={this.state.includeMargin}
                />
           

          </div>
        );
    }
}

export default App;