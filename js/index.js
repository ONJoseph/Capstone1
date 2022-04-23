const body = document.querySelector('body');

function hamburger() {
  const a = document.querySelector('.mob-nav');
  if (a.style.display === 'none') {
    a.style.display = 'block';
    bars.style.display = 'none';
    body.style.overflowY = 'hidden';
  } else {
    a.style.display = 'none';
    bars.style.display = 'block';
    body.style.overflowY = 'scroll';
  }
}

const bars = document.getElementById('hamburger');

const data = {
  speakers: [
    {
      name: 'Yochai Benkler',
      picture: 'images/speakersimg/speaker1.png',
      workplace: 'Professor at Harvard Law School',
      description: 'Studies Commons-based peer production, and published his first seminal book The wealth of Networks in 2006.',
    },
    {
      name: 'Kilnam Chon',
      picture: 'images/speakersimg/speaker2.png',
      workplace:
        'Emeritus Professor, Korea Advanced Institute',
      description:
        'Helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society (ISOC) Internet Hall of fame.',
    },
    {
      name: 'Sohyeong Noh',
      picture: 'images/speakersimg/speaker3.png',
      workplace: 'Art Center Nabi Director, CC Korea Director',
      description:
        'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    },
    {
      name: 'Julia Leda',
      picture: 'images/speakersimg/speaker4.png',
      workplace: 'Head of the Young Pirates of Europe',
      description:
        'European integration, polical democracy and participation of youth through online as her major concern, Reda report outlining potential changes to EU copyright law was approved by the parliament in July.',
    },
    {
      name: 'Lila Tretikov',
      picture: 'images/speakersimg/speaker5.png',
      workplace: 'Secretary General of the Wikimedia Foundation',
      description:
        'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the non-profit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
    },

    {
      name: 'Ryan Merkley',
      picture: 'images/speakersimg/speaker6.png',
      workplace: 'Creative Commons CEO, Former Mozilla Foundation COO',
      description:
        'Ryan had been leading open-source projects at the mozilla foundation such as the open source movement.',
    },
  ],
};

const speakersList = document.getElementById('speakers-list');
const { speakers } = data;
const mbtn = document.getElementById('m-btn');

let speakersToShow = data.speakers;

window.onload = () => {
  speakersList.innerHTML = '';
  if (window.screen.width < 768) {
    speakersToShow = speakers.slice(0, 2);
  }
  speakersToShow.reverse().forEach((speaker) => {
    const speakerHTML = `<article class='speaker'>
    <div>
                            <img src=${speaker.picture} alt='${speaker.name}'/>
                            </div>
                            <div class='desc'>
                                <p href='#' class='speaker-name'>${speaker.name}</p>
                                <p href='#' class='speaker-job'> <i> ${speaker.workplace} </i> </p>
                                <div class='speaker-bar'></div>
                                <p class='speaker-desc'>${speaker.description}</p>
                            </div>
                         </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
  });
};
window.addEventListener('resize', () => {
  document.getElementById('m-btn').classList.remove('hiden');
  speakersList.innerHTML = '';
  if (window.screen.width < 768) {
    speakersToShow = speakers.slice(0, 2);
  } else {
    speakersToShow = speakers;
  }
  speakersToShow.forEach((speaker) => {
    const speakerHTML = `<article class='speaker clearfix'>
    <div>
                                <img src=${speaker.picture} alt='${speaker.name}'/>
                                </div>
                                <div class='desc'>
                                    <p href='#' class='speaker-name'>${speaker.name}</p>
                                    <p href='#' class='speaker-job'> <i> ${speaker.workplace} </i> </p>
                                    <div class='speaker-bar'></div>
                                    <p class='speaker-desc'>${speaker.description}</p>
                                </div>
                        </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
  });
});

mbtn.addEventListener('click', () => {
  speakersList.innerHTML = '';
  speakers.reverse().forEach((speaker) => {
    const speakerHTML = `<article class='speaker clearfix'>
    <div>
                                  <img src=${speaker.picture} alt='${speaker.name}'/>
                                  </div>
                                  <div class='desc'>
                                      <p href='#' class='speaker-name'>${speaker.name}</p>
                                      <p href='#' class='speaker-job'> <i> ${speaker.workplace} </i> </p>
                                      <div class='speaker-bar'></div>
                                      <p class='speaker-desc'>${speaker.description}</p>
      
                                  </div>
                          </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
    document.getElementById('m-btn').classList.add('hiden');
  });
});
