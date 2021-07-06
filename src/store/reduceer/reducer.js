const Initial = {
    questions:[
        {question:'Who are you?',options:{a:'Anas (correct)',b:'Ali',c:'Ahmed'},correct:'a'},
        {question:'How are you?',options:{a:'fine',b:'depressed (correct)',c:'happy'},correct:'b'},
        {question:'How old are you?',options:{a:'10',b:'15',c:'20 (correct)'},correct:'c'},
        {question:'Where do you live?',options:{a:'Lahore',b:'Quetta',c:'Karachi (correct)'},correct:'c'},
    ],
    total:0
}

function Reducer(state = Initial, action) {
        switch (action.type) {
            case 'TOTAL':
                return ({
                    ...state,
                    Blood:action.payload
            })
        }
        return state;
    }
export default Reducer