import React from "react";
import img from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import Rating from "@material-ui/lab/Rating";
import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonial = () => {
    const [value] = React.useState<number | null>(4.5);

  return (
    <>
      <div className="heading">
        <h1 style={{ textAlign: "center", marginTop: "40px" }}>Testimonials</h1>
        <hr />
      </div>
      <div className="bg-premium-dark py-5">
        <Container className="pt-1">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <div className="text-center text-xl-right pt-0 pt-xl-4 pb-5 pb-xl-0">
                <h1 className="display-2 text-blue mb-3 font-weight-bold">
                  Our customer stories
                </h1>
                <p className="font-size-xl mb-4 text-black-50">
                  Read how customers around the world uses our Product and satisfied
                </p>
                <Button color="primary" variant="contained" size="large">
                  Read the stories
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <div className="pl-0 pl-xl-5">
                <Card className="mb-4">
                  <CardContent className="p-3">
                    <div className="align-box-row align-items-start">
                      <div>
                        <Card className="card-transparent">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card-img-wrapper rounded"
                          >
                            <img
                              src={img}
                              className="card-img-top rounded-circle"
                              style={{ width: 80 }}
                              alt="..."
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-4">
                        <div className="mb-3 text-warning font-size-lg">
                          <FontAwesomeIcon icon={["fas", "star"]} />
                          <FontAwesomeIcon icon={["fas", "star"]} />
                          <FontAwesomeIcon icon={["fas", "star"]} />
                          <FontAwesomeIcon icon={["fas", "star"]} />
                          <FontAwesomeIcon icon={["fas", "star"]} />
                        </div>
                        <blockquote className="my-3 text-black-50 blockquote">
                          Love this company. The scents are amazing, smell like
                          the original brand. Scent lasts all day. Quick
                          delivery. Friendly and knowledgeable staff. Highly
                          recommend
                        </blockquote>
                        <div className="font-size-lg font-weight-bold">
                          Syed Ali Uz Zaman,
                          <small className="text-black-50">
                            <Box
                              component="fieldset"
                              mb={3}
                              borderColor="transparent"
                            >
                              <Typography component="legend">
                                Review
                              </Typography>
                              <Rating name="read-only" value={value} readOnly />
                            </Box>
                          </small>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mb-4">
                  <CardContent className="p-3">
                    <div className="align-box-row align-items-start">
                      <div>
                        <Card className="card-transparent">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card-img-wrapper rounded"
                          >
                            <img
                              src={img2}
                              className="card-img-top rounded-circle"
                              style={{ width: 80 }}
                              alt="..."
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-4">
                        <div className="mb-3 text-warning font-size-lg">
                          <FontAwesomeIcon icon={["fas", "star"]} />
                          <FontAwesomeIcon icon={["fas", "star"]} />
                          <FontAwesomeIcon icon={["fas", "star"]} />
                          <FontAwesomeIcon icon={["fas", "star"]} />
                          <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
                        </div>
                        <blockquote className="my-3 text-black-50 blockquote">
                        Ordered a variety of perfumes last week which arrived Monday 9th August, all extremely good quality, myself and my colleague will most definitely be ordering again.
                        </blockquote>
                        <div className="font-size-lg font-weight-bold">
                          Jimi Tomlinson,
                          <small className="text-black-50"> <Box
                              component="fieldset"
                              mb={3}
                              borderColor="transparent"
                            >
                              <Typography component="legend">
                                Review
                              </Typography>
                              <Rating name="read-only" value={value} readOnly />
                            </Box></small>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Testimonial;
