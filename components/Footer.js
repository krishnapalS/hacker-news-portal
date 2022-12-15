import styled from 'styled-components'

const FooterBody = styled.footer`
  padding: 10px;
  font-size: 13px;

  > p {
    margin-top: 5px;
    font-size: 12px;
  }

  > span {
    margin: 0 5px;
    display: inline-block;

    &:first-child {
      margin-left: 0;
    }
  }
`

const Footer = () => (
  <FooterBody>
    <span>To Search🔍 specific stories</span>
    <a href="https://hacker-news-stories-search.netlify.app/" target="_blank" rel="noopener">
      Click Here
    </a>
    <p>* Data is limited by what Hacker News API allows</p>
  </FooterBody>
)

export default Footer
