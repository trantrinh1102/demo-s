import React from 'react'
import MemberCard from 'components/tabsStyled/components/CardDetailItem';

import logo from 'images/avatar.png';

const members = [
  {
    "avatar": logo,
    "name": "Lois shelton",
    "member": "Apple Inc"
  },
  {
    "avatar": logo,
    "name": "Lois shelton",
    "member": "Apple Inc"
  },
  {
    "avatar": logo,
    "name": "Lois shelton",
    "member": "Apple Inc"
  },
  {
    "avatar": logo,
    "name": "Lois shelton",
    "member": "Apple Inc"
  },
  {
    "avatar": logo,
    "name": "Lois shelton",
    "member": "Apple Inc"
  },
  {
    "avatar": logo,
    "name": "Lois shelton",
    "member": "Apple Inc"
  },
  {
    "avatar": logo,
    "name": "Lois shelton",
    "member": "Apple Inc"
  },
  {
    "avatar": logo,
    "name": "Lois shelton",
    "member": "Apple Inc"
  },
  {
    "avatar": logo,
    "name": "Lois shelton",
    "member": "Apple Inc"
  },
  {
    "avatar": logo,
    "name": "Lois shelton",
    "member": "Apple Inc"
  }
];

class Member extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="rightBar">
        <ul className="tagsList hasShadow groupList">
          {members &&
            members.map((item, i) => {
              return <MemberCard key={i} data={item} />
            })}
        </ul>
      </div>
    )
  }
}

export default Member;
