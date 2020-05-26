import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Switch, useHistory, Route } from 'react-router-dom'
import TestCrud from './components/TestCrud'
import DesafioCor from './components/DesafioCor'
import HomePage from './components/Home'
import PaginaNaoEncontrada from './components/PaginaNaoEncontrada'
import DesafioModulo1 from './components/DesafioModulo1'
import {AssignmentInd, Home, InvertColors} from '@material-ui/icons';

const drawerWidth = 240;

//#region estilo
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
//#endregion

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  
  const listaPaginas = [
    {
      rota: '/',
      nome: 'Home',
      icone: <Home/>,
      component: HomePage,
    },
    {
      rota: 'TestCrud',
      nome: 'TestCrud',
      icone: <AssignmentInd/>,
      component: TestCrud
    },
    // {
    //   rota: 'TestCrud 2',
    //   nome: 'TestCrud 2',
    //   icone: <Home/>,
    // },
    {
      rota: 'DesafioCor',
      nome: 'Desafio Cor',
      icone: <InvertColors/>,
      component: DesafioCor,
    },
    {
      rota: 'DesafioModulo1',
      nome: 'Desafio Modulo1',
      icone: <AssignmentInd/>,
      component: DesafioModulo1
    }
  ];

  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Olá Pessoal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {listaPaginas.map((pagina, index) => (
            <ListItem button key={index} onClick={()=> history.push(pagina.rota)}>
              <ListItemIcon>{pagina.icone}
              </ListItemIcon>
              <ListItemText primary={pagina.nome} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
          <Switch>
              <Route path="/" exact={true} component={HomePage} />
              <Route path="/testCrud" exact={true} component={TestCrud} />
              <Route path="/desafioCor" exact={true} component={DesafioCor} />
              <Route path="/desafioModulo1" exact={true} component={DesafioModulo1} />
              <Route path='*' component={PaginaNaoEncontrada} />
          </Switch>
      </main>
    </div>
  );
}
