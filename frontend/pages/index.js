import Layout from '../components/MyLayout.js'

export default function Index() {
  return (
    <Layout>
      <br />
      <img src="/static/saddleHeader.jpg" style={{margin: "auto", maxWidth: '700px', maxHeight: "500px" , margin: "auto"}} />
      <h1>Information on Campgrounds</h1>

      <p>Sometimes spending a day in the wilderness isn't quite enough to truly capture the feeling of a special place. Sure, you see some amazing views or go on an unforgettable hike. But to get the full experience, you yearn to see the dark, starry skies. To listen to the yips of coyotes. To watch the sun rise on a silent, dewy morning.

Camping in the great outdoors transforms a regular old road trip into an epic experience. So pack up your tent or hitch up the fifth wheel — adventure awaits.
  </p> 

<style jsx>{`
          h1, h2, h3, h4,
          a,
          p {
          	color: #006600;
            font-family: "Arial";
          }


          .button-style {
            margin: auto auto;
            cursor: pointer;
            background-color: #228B22;
            color: #ffffff;
            width: 100px;
            font-family: "Arial";
          }

          .text-style {
          	margin: auto auto;
          	width: 200px;
          }

          input {
          	margin: auto auto;
          	width: 200px;

          }


          .description {
            font-family: "Arial";
            font-size: "10px";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
   </Layout>
  )
}
