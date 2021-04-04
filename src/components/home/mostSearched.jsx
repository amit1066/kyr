import React from 'react';

import InputBase from '@material-ui/core/InputBase';

class MostSearched extends React.Component{
    render(){
        return(
            <InputBase
            placeholder="         Search…"
            
            inputProps={{ 'aria-label': 'search' }}
          />
        );
    }
}
export default MostSearched;