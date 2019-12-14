import React from 'react';
import { Link } from 'react-router-dom'

import Aux from './../components/Auxilliary/Aux'

const profiles = [
    {
        key: "Delta0G",
        name: "Delta0G",
        description: <Aux>
                        Math major who spent way too much time working on this story instead of doing actual math
                    </Aux>,
        boss: true
    },
    {
        key: "Jacque the \"Rock\"",
        name: "Jacque the \"Rock\"",
        description: <Aux>
                        <em>Jacque</em> master of doodles and story artist.
                        When asked to do pictures, the response was "F**k my life, bro"
                    </Aux>
    },
    {
        key: "Computer Three",
        name: "Computer Three",
        description: <Aux>
                        Practically the only person that ever read the drafts of the story. 
                        Once in a blue moon editor and scare proofreader.
                        Also author of <Link>Masks</Link>
                    </Aux>
    },
    {
        key: "Icarus",
        name: "Icarus",
        description: <Aux>
                        Fan of <Link>A Dragon's Revolt</Link> and website designer hobbyist, 
                        designer of the Lantern Dragon Works site. Like Computer Three, 
                        seldom contributor and proofreader.
                    </Aux>
    }
]

export default profiles;
