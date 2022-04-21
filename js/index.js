const body = document.querySelector('body');
const bars = document.getElementById('hamburger');

function hamburger() {
  const a = document.querySelector('.mobile-nav');
  if (a.styles.display === 'none') {
    a.style.display = 'block';
    bars.styles.display = 'none';
    body.styles.overflowY = 'hidden';
  } else {
    a.styles.display = 'none';
    bars.styles.display = 'block';
    body.styles.overflowY = 'scroll';
  }
}

// Speakers Data Array Entry

const data = {
  speakers: [
    {
      name: 'Yochai Benkler',
      picture: 'images/speakersimg/speaker1.png',
      workplace: 'Professor at Harvard Law School',
      description: 'Focusing on a collaborative approach in a networked environment, he created the concept of',
    },
    {
      name: 'Jeon Gil-nam',
      picture: 'images/speakersimg/speaker2.png',
      workplace:
        'Emeritus Professor, Korea Advanced Institute',
      description:
        'By developing Asias first Internet protocol network SDN and leading Koreas first private line',
    },
    {
      name: 'Noh So-young',
      picture: 'images/speakersimg/speaker3.png',
      workplace: 'Art Center Nabi Director, CC Korea Director',
      description:
        'As the author of &lt;Digital Art Art of Our Time&gt;, he opened Art Center Nabi, Koreas first digital',
    },
    {
      name: 'Julia Leda',
      picture: 'images/speakersimg/speaker4.png',
      workplace: 'Head of the Young Pirates of Europe',
      description:
        'European integration and online youth participation in politics and democracy are major concerns',
    },
    {
      name: 'Layla Tretikov',
      picture: 'images/speakersimg/speaker5.png',
      workplace: 'Secretary General of the Wikimedia Foundation',
      description:
        'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia.',
    },

    {
      name: 'Ryan Merkley',
      picture: 'images/speakersimg/speaker6.png',
      workplace: 'Creative Commons CEO, Former Mozilla Foundation COO',
      description:
        'He has been active in open movements such as open government and open source.',
    },
  ],
};

const speakersList = document.getElementById('list-speakers');
const { speakers } = data;
const morebtn = document.getElementById('more-btn');

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
    listSpeakers.insertAdjacentHTML('afterbegin', speakerHTML);
  });
};
window.addEventListener('resize', () => {
  document.getElementById('more-btn').classList.remove('hiden');
  listSpeakers.innerHTML = '';
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
    listSpeakers.insertAdjacentHTML('afterbegin', speakerHTML);
  });
});

morebtn.addEventListener('click', () => {
  listSpeakers.innerHTML = '';
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
    listSpeakers.insertAdjacentHTML('afterbegin', speakerHTML);
    document.getElementById('more-btn').classList.add('hiden');
  });
});