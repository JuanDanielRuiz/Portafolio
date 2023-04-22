import "./Navar.css";

export const Navar = () => {
  const Routes = ["Home", "About", "Contact", "Portafolio"];
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Portafolio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          {Routes.map((route, index) => {
            return (
            
                <ul class="navbar-nav  mb-7 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href={route}>
                      {route}
                    </a>
                  </li>
                </ul>
            
            );
          })}
            </div>
        </div>
      </nav>
    </div>
  );
};

/*    <nav   class="navbar navbar-expand-lg navbar-dark bg-dark " >
        <div class="collapse navbar-collapse">
         {
          Routes.map((route, index) => {
            return (
              <div >
              <a class="navbar-brand"   href={route}>
                {route}
              </a>
            </div>
             
            )
          })
         }
        </div>
      </nav> */
