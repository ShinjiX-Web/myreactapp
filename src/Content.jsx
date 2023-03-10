import './Content.css';
import { ReactComponent as Collection } from "./collection.svg";
import { ReactComponent as GearFill } from "./gearfill.svg";
import { ReactComponent as Speedometer } from "./speedometer.svg";
import { ReactComponent as Table } from "./table.svg";

const Content = () => {

  return (
    <main>
      <div className='container my-5'>
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 header-one">Ang Langitngit ng Papag sa Bukiran</h1>
            <p className="lead my-3"> Pinakauna at pinakamadami listahan ng mga nakakakilig na palabas mula sa Viva Videos.
            Pinangugunahan ni Katya Santos, Joyce Jimenez, at Aubrey Miles.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold rounded-pill">Live Show</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4 rounded-pill">Pay Per View</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src="https://profiles.ph/wp-content/uploads/2021/03/Katya-Santos.jpg" alt="bootstrap" width="500"></img>
          </div>
        </div >
      </div >

      <div class="b-example-divider"></div>

        <div class="container px-4 py-5" id="custom-cards">

          <h2 class="pb-2 border-bottom">HOT!!!</h2>

          <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          
            <div class="col">
            
              <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg card-one">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Aubrey Miles goes wild!</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"></img>
                    </li>
                    <li class="d-flex align-items-center me-3">
                      <svg class="bi me-2" width="1em" height="1em"></svg>
                      <small>Earth</small>
                    </li>
                    <li class="d-flex align-items-center">
                      <svg class="bi me-2" width="1em" height="1em"></svg>
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg card-two">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Bulaklak sa kama ni Joyce Jimenez</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"></img>
                    </li>
                    <li class="d-flex align-items-center me-3">
                      <svg class="bi me-2" width="1em" height="1em"></svg>
                      <small>Pakistan</small>
                    </li>
                    <li class="d-flex align-items-center">
                      <svg class="bi me-2" width="1em" height="1em"></svg>
                      <small>4d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg card-three">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Halimuyak ni Katya sa Umaga</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"></img>
                    </li>
                    <li class="d-flex align-items-center me-3">
                      <svg class="bi me-2" width="1em" height="1em"></svg>
                      <small>California</small>
                    </li>
                    <li class="d-flex align-items-center">
                      <svg class="bi me-2" width="1em" height="1em"></svg>
                      <small>5d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="b-example-divider"></div>

        <div class="container px-4 py-5">
          <h2 class="pb-2 border-bottom">Another exciting Moment</h2>

          <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5 left-aligned">
            <div class="col d-flex flex-column align-items-start gap-2">
              <h3 class="fw-bold">Left-aligned title explaining these awesome features</h3>
              <p class="text-muted">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="https://go.dev/" class="btn btn-primary btn-lg">Primary button</a>
            </div>

            <div class="col">
              <div class="row row-cols-1 row-cols-sm-2 g-4">
                <div class="col d-flex flex-column gap-2">
                  <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg class="small" width="1em" height="1em">
                    <GearFill></GearFill>
                    </svg>
                  </div>
                  <h4 class="fw-semibold mb-0">Featured title</h4>
                  <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
                </div>

                <div class="col d-flex flex-column gap-2">
                  <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg class="small" width="1em" height="1em">
                      <Collection></Collection>
                      </svg>                               
                  </div>
                  <h4 class="fw-semibold mb-0">Featured title</h4>
                  <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
                </div>

                <div class="col d-flex flex-column gap-2">
                  <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg class="bi" width="1em" height="1em">
                     <Speedometer></Speedometer>
                    </svg>
                  </div>
                  <h4 class="fw-semibold mb-0">Featured title</h4>
                  <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
                </div>

                <div class="col d-flex flex-column gap-2">
                  <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg class="bi" width="1em" height="1em">
                      <Table></Table>
                    </svg>
                  </div>
                  <h4 class="fw-semibold mb-0">Featured title</h4>
                  <p class="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main >
  )
}

export default Content;