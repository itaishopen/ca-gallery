

function initPage() {
  gProjs = createPortfolios();
  captchaCode()
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
                        <li><a onclick="openInNewTub('https://github.com/itaishopen/${modal.id}')">See the code in github</a></li>
                        <li><a onclick="openInNewTub('projs/${modal.id}/index.html')">open project</a></li>
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

function captchaCode() {
  var Numb1, Numb2, Numb3, Numb4, Code;
  Numb1 = (Math.ceil(Math.random() * 10) - 1).toString();
  Numb2 = (Math.ceil(Math.random() * 10) - 1).toString();
  Numb3 = (Math.ceil(Math.random() * 10) - 1).toString();
  Numb4 = (Math.ceil(Math.random() * 10) - 1).toString();

  Code = Numb1 + Numb2 + Numb3 + Numb4;
  $("#code").text(Code);
  $('.captcha').val('').blur();
}

function processForm() {
  var userInput = $(".captcha").val();
  var orgCode = $("#code").text();
  if (userInput === "") {
    $(".captcha-message").show();
  } else if (userInput == orgCode) {
    $(".captcha-message").hide();
    $(".captcha-message-input").hide();
  } else {
    $(".captcha-message").hide();
    $(".captcha-message-input").show();
    captchaCode()
  }
  var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;
  var emailText = $(".email").val();
  if (emailText === "") {
    $(".email-message").show();
  } else if (emailFilter.test(emailText)) {
    $(".email").css({color: "#609D29"});
    $(".email-message").hide();
    $(".email-message-input").hide();
  } else {
    $(".email").css({color: "#CE3B46"});
    $(".email-message").hide();
    $(".email-message-input").show();
  }
  var subjectFilter = /^([a-zA-Z \t]{3,15})+$/;
  var subjectText = $(".subject").val();
  if (subjectText === "") {
    $(".subject-message").show();
  } else if (subjectFilter.test(subjectText)) {
    $(".subject").css({color: "#609D29"});
    $(".subject-message").hide();
    $(".subject-message-input").hide();
  } else {
    $(".subject").css({color: "#CE3B46"});
    $(".subject-message").hide();
    $(".subject-message-input").show();
  }
  var messageText = $(".message").val();
  if (messageText === "") {
    $(".message-message").show();
  } else {
    $(".message-message").hide();
  }
  if (
    userInput == orgCode &&
    emailFilter.test(emailText) &&
    subjectFilter.test(subjectText)
  ) {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailText}&su=${subject}&body=${messageText}`);
    $('.email').val('').blur();
    $('.subject').val('').blur();
    $('.message').val('').blur();
  } else {
    captchaCode()
  }
}

function openInNewTub(link) {
  window.open(link);
}

