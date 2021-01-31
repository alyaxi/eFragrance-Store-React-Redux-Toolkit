import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useSelector } from "react-redux";
import { ProductsItem } from "../../store/store";
import "./Carts.css";
import { add, clear, remove, store } from "../../store/AppSlice";
import { Theme, createStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "react-bootstrap";
import { Dialog } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: "#0f3057",
      color: "#eff7e1",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      margin: 20,

    },
  })
);

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
      margin: 0,
      position: "relative",
      width: "1000px",
    },
  },
});

export default function CartTable() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes1 = useStyles();
  const [modal1, setModal1] = React.useState(false);
  const toggle1 = () => {
    setModal1(!modal1)
  };

  const toggleClose = () => {
    setModal1(false)
  }



  const Products = useSelector((state: ProductsItem[]) => state);

  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead className="tabel-row">
          <TableRow>
            <TableCell />
            <TableCell align="left">Products Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Products.filter((product) => product.added).map((item) => (
            <div key={item.id}>
              <TableRow className={classes.root}>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell
                  align="left"
                  style={{ float: "left" }}
                  component="th"
                  scope="row"
                >
                  {item.name}
                </TableCell>

                <TableCell align="right">{item.size}</TableCell>
                <TableCell align="right">{item.launched}</TableCell>
                <TableCell align="right">
                  <div>
                    <IconButton aria-label="delete">
                      <DeleteIcon onClick={toggle1} />
                    </IconButton>
                <Dialog open={modal1} onClose={toggle1}>
                    <div className="text-center p-5">
                        <div className="avatar-icon-wrapper rounded-circle m-0">
                            <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-success text-success m-0 d-130">
                                <FontAwesomeIcon icon={['far', 'lightbulb']} className="d-flex align-self-center display-3"/>
                            </div>
                        </div>
                        <h4 className="font-weight-bold mt-4">Do you want to delete this item?</h4>
                        <p className="mb-0 font-size-lg text-muted">Please Select One Option.</p>
                        <div className="pt-4">
                            <Button onClick={() => {
                              store.dispatch(clear(item))
                              toggleClose()
                              }} variant="outlined" color="secondary" className="mx-1">
                                    <span className="btn-wrapper--label">
                                        Confirm
                </span>
                            </Button>
                            <Button onClick={toggle1} color="primary" variant="contained" className="mx-1">
                                    <span className="btn-wrapper--label">
                                        Cancle
                </span>
                            </Button>
                        </div>
                    </div>
                </Dialog>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={6}
                >
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Typography variant="h6" gutterBottom component="div">
                        Product # {item.id}
                      </Typography>
                      <Table size="small" aria-label="purchases">
                        <TableHead>
                          <TableRow>
                            <TableCell>image</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right">Total price ($)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell component="th" scope="row">
                              <img
                                src={item.imgUrl}
                                width="100px"
                                height="100px"
                                alt="img"
                              />
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {item.brand}
                            </TableCell>
                            <TableCell>${item.price}</TableCell>
                            <TableCell align="center">
                              <div className="quantity buttons_added">
                                <input
                                  type="button"
                                  value="-"
                                  className="minus"
                                  onClick={() => store.dispatch(remove(item))}
                                />
                                <input
                                  step="1"
                                  min="1"
                                  max=""
                                  name="quantity"
                                  value={item.quantity}
                                  title="Qty"
                                  className="input-text qty text"
                                  pattern=""
                                />
                                <input
                                  type="button"
                                  value="+"
                                  className="plus"
                                  onClick={() => store.dispatch(add(item))}
                                />
                              </div>
                            </TableCell>
                            <TableCell align="right">
                              ${item.price * item.quantity}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </div>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
