

function initPage() {
    gProjs = createPortfolios();
    renderBoard(gProjs)
}

function renderBoard(projs) {
    var strHtmlPortfolio = projs.map(function (proj) {
    return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
        </div>
        </div>`
    });
    $('.portfolio-row').html(strHtmlPortfolio.join(''));
    var counter = 0;
    var strHtmlModal = projs.map(function (modal) {
        counter++;
        var time = new Date(modal.publishedAt)
        return `
        <!-- Modal ${counter} -->
        <div class="portfolio-modal modal fade" id="portfolioModal${modal.id}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                  <div class="rl"></div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 mx-auto">
                    <div class="modal-body">
                      <!-- Project Details Go Here -->
                      <h2>${modal.name}</h2>
                      <p class="item-intro text-muted">${modal.title}.</p>
                      <img class="img-fluid d-block mx-auto" src="img/portfolio/${modal.id}-full.jpg" alt="">
                      <p>${modal.desc}</p>
                      <ul class="list-inline">
                        <li>Date: ${time}</li>
                        <li>Client: coding academy</li>
                        <li>Category: Illustration</li>
                        <li><a href="https://github.com/itaishopen/${modal.id}">See the code in github</a></li>
                        <li><a href="projs/${modal.id}/index.html">open</a></li>
                      </ul>
                      <button class="btn btn-primary" data-dismiss="modal" type="button">
                          <i class="fa fa-times"></i>
                          Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
    });
    $('.portfolio-modals').html(strHtmlModal.join(''));
}

function processForm(e) {
  if (e.preventDefault) {
    e.preventDefault();
    var email = $('.input-email').val();
    var subject = $('.input-subject').val();
    var message = $('.input-message').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${message}`);
    return false;
  }
}

function saveForm() {
  var form = $('.contact-me-form');
  if (form.attachEvent) {
      form.attachEvent("submit", processForm);
  } else {
      form.addEventListener("submit", processForm);
  }
}