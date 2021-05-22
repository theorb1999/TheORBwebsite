import React from "react";
import PropTypes from "prop-types";


const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

<div className="stopTheClicksInDev">
<iframe src="https://free.timeanddate.com/countdown/i7te3isb/n25/cf12/cm0/cu5/ct0/cs0/ca0/co1/cr0/ss0/cac3cf/cpc000/pct/tcfff/fn3/fs200/szw576/szh243/tatThe%20ORB%20Staking%20is%20Enabled%20in...../tac3cf/tptTime%20since%20Event%20started%20in/tpc000/iso2021-05-22T15:00:25/pl3/pr0/pt0/pb3" allowtransparency="true" frameborder="0" width="1168" height="166"></iframe>
</div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;