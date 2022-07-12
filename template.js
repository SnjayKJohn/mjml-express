exports.hbsTemplate = `
<mjml>
  <mj-head>
    <mj-breakpoint width="320px" />
  </mj-head>
  <mj-body width="800px">
    <mj-wrapper width="800px">
      <mj-section>
        <mj-column>
          <mj-text>
            Hi,
          </mj-text>
          <mj-text line-height="20px">The following request is escalated to you. Click on the below button to open it in the BestDoc Concierge (files uploaded to this request will be available in BD Concierge only).
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-button width="300px" href="http://localhost:8000/requests/xwZG19XGY5" target="__blank" font-family="Helvetica" background-color="#2753bb" color="white">
            Go to Request
          </mj-button>
        </mj-column>
      </mj-section>
    </mj-wrapper>
    <mj-wrapper background-color="#f5f5f5" border-radius="10px" padding="0px 20px 20px 20px">
      <mj-section>
        <mj-column>
          <mj-image width="75px" src="https://apiconcierge.staging.bestdocapp.com/static/bestdoc.svg" />
          <mj-text align="center" padding="0px">
            <h1>
              BD Concierge
            </h1>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section padding="0px">
        <mj-column>
          <mj-text font-size="22px" align="center" font-weight="100" padding="4px">
            <span style="font-weight: 100;"> {{requestId}} : </span>
            <span style="font-weight: 600;"> {{request}} </span>
          </mj-text>
        </mj-column>
      </mj-section>

      <mj-section padding="0px 0px 15px 0px">
        <mj-column>
          <mj-text align="center">
            {{#if isDelayed}}
              <span style="background-color: #f44336; color: #fff; border-radius: 20px; padding: 6px 16px;">Delayed</span>
            {{/if}}
          </mj-text>
        </mj-column>
      </mj-section>

      <mj-section background-color="#fff" border-radius="20px">
        <mj-column>
          <mj-text font-size="16px" align="center" color="#909090" padding="4px">
            <span style="font-size: 16px; color: #909090;"> Room: </span>
            <span style="font-size: 18px; color: #000;"> {{unit.room.name}} </span>
          </mj-text>
        </mj-column>
        <mj-column>
          <mj-text font-size="16px" align="center" color="#909090" padding="4px">
            <span style="font-size: 16px; color: #909090;"> Unit: </span>
            <span style="font-size: 18px; color: #000;"> {{unit.name}} </span>
          </mj-text>
        </mj-column>
      </mj-section>

      <mj-section>
        <mj-column>
          {{#if assignee}}
            <mj-text font-size="16px" line-height="20px" align="center" color="#909090">
              Assigned To : {{assignee.name}} ( <a href="tel:{{assignee.mobile}}">{{assignee.mobile}}</a> ) at ____
            </mj-text>
          {{/if}}
          {{#if requestedBy}}
            <mj-text font-size="16px" line-height="20px" align="center" color="#909090">
              Requested By : {{requestedBy.name}} ( <a href="tel:{{requestedBy.mobile}}">{{requestedBy.mobile}}</a> ) at {{formatDate createdAt}}
            </mj-text>
          {{else}}
            <mj-text font-size="16px" line-height="20px" align="center" color="#909090">
              Requested By : QR Scanned ( <a href="tel:{{requestedMobile}}">{{requestedMobile}}</a> ) at {{formatDate createdAt}}
            </mj-text>
          {{/if}}
        </mj-column>
      </mj-section>

      {{#if comments}}
        <mj-section background-color="#fff" border-radius="10px">
          <mj-column width="100%">
            <mj-text font-size="16px" align="left">
              Requested Notes:
            </mj-text>
            <mj-divider border-width="1px" border-style="solid" border-color="lightgrey" />
          </mj-column>
          {{#each comments as | comment |}}
            <mj-column width="15%" border-radius="50%">
              <mj-text color="#fff" background-color="rgb(0, 159, 209)" font-size="22px" align="center" padding="20px 0px 0px 15px" height="25px">
                <span style="background: {{comment.bgColor}}; padding: 8px 18px 12px 18px; border-radius: 50%;">{{comment.avatarChar}}</span>
              </mj-text>
            </mj-column>
            <mj-column width="85%">
              <mj-text font-size="14px" line-height="20px" align="left">
                <strong>{{comment.commenter.name}} </strong>- {{formatDate comment.createdAt}}
              </mj-text>
              <mj-text font-size="14px" align="left" font-weight="100" padding-top="0px">
                {{comment.comments}}
              </mj-text>
              <mj-divider border-width="1px" border-style="solid" border-color="lightgrey" />
            </mj-column>
          {{/each}}
        </mj-section>
      {{/if}}
    </mj-wrapper>

    <mj-section padding-bottom="0px">
      <mj-column width="100%" padding-bottom="0px">
        <mj-text font-size="14px" color="#909090" align="center" >
          You are getting this mail because you are part of the “<Escalation_Name> escalation matrix.
            To unsubscribe, ask your admin to remove you from this escalation matrix.
        </mj-text>
        <mj-divider border-width="1px" border-style="solid" border-color="lightgrey" />
      </mj-column>
    </mj-section>

    <mj-section>
      <mj-column width="100%">
        <mj-image width="200px" href="https://www.bestdocapp.com/" target="__blank" align="center" src="https://apiconcierge.dev.bestdocapp.in/static/poweredByBestdoc.png" />
      </mj-column>
    </mj-section>

  </mj-body>
</mjml>
`;
