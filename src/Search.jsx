import { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, InputBase, List, ListItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from './redux/actions/productActions';
import { Link } from 'react-router-dom';



const useStyle = makeStyles(theme => ({
    search: {
        margin: '1% 0 1% 3%',
        width: '78%',
        display: 'flex',
        height: '1%',
        
        borderRadius: theme.shape.borderRadius,
        boxShadow: 'rgba(0, 0, 0, 0.0) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.0) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
        backgroundColor: 'rgba(1, 0, 0, 0)',
        '&:hover': {
          backgroundColor:'rgba(0, 0, 0, 0)',
          boxShadow: '#88DAD2 5px 14px 15px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        },
      },
      searchIcon: {
        marginLeft: 'auto',
        padding: theme.spacing(1, 1),
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#112031'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%',
        padding: 0,
        color: 'white'
      },
      inputInput: {
        paddingLeft: 20,
        paddingTop: 0,
        width: '100%',
    },
    list: {
      position: 'absolute',
      marginTop: 36,
      color: 'white',
      borderRadius: '4%',
      backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.377) 0%,rgba(0, 0, 0, 0.866) 100%)`,
    }
}))

const Search = () => {
    const classes = useStyle();
    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className={classes.search}>
            <InputBase
              placeholder="Search for products, brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => getText(e.target.value)}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            {
              text && 
              <List className={classes.list} hidden={open}>
                {
                  products.filter(product => product.title.shortTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.shortTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </List>
            }
        </div>
    )
}

export default Search;