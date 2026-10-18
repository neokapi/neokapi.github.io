import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,t as r}from"./src-D40x1q2i.js";import{n as i,r as a,t as o}from"./runtime-ueGu4ihF.js";import{c as s}from"./CodedTextDisplay-DvpQLG1i.js";import{l as c,s as l}from"./MemoryGroupedEntry--l2-U2F9.js";import{n as u,t as d}from"./SourceCellDisplay-SEJA53du.js";import{n as f,t as p}from"./FormattedSourceDisplay-CAHk5nf3.js";import{r as m,t as h}from"./editorText-4SipkGAJ.js";import{C as g,T as _,d as v}from"./fixtures-CQTFPDtB.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{a(),r(),f(),u(),m(),v(),y=t(),b={title:`Editor/Formatting/ConstraintBehaviors`,tags:[`autodocs`],parameters:{docs:{description:{component:[`Demonstrates the three editing constraints defined by vocabularies.`,``,`Each inline code type declares constraints that control translator behavior:`,``,`| Constraint | What it controls | Example |`,`|---|---|---|`,`| **Deletable** | Can the tag be removed from the translation? | Line breaks and variables are non-deletable |`,`| **Cloneable** | Can the tag be duplicated in the translation? | Variables cannot be duplicated |`,`| **Reorderable** | Can the tag be moved relative to others? | ICU functions must stay in position |`,``,`Constraints are defined in the vocabulary but can be overridden per-span.`].join(`
`)}}}},x={span_type:`opening`,type:`fmt:bold`,id:`1`,data:`<b>`},S={span_type:`closing`,type:`fmt:bold`,id:`1`,data:`</b>`},C={span_type:`placeholder`,type:`struct:break`,id:`2`,data:`<br/>`,deletable:!1,cloneable:!1,can_reorder:!1},w={span_type:`placeholder`,type:`code:variable`,id:`3`,data:`{userName}`,display_text:`{userName}`,deletable:!1,cloneable:!1,can_reorder:!0},T={span_type:`placeholder`,type:`code:placeholder`,id:`4`,data:`{0}`,display_text:`{0}`,deletable:!1,cloneable:!1,can_reorder:!0},E={span_type:`opening`,type:`code:function`,id:`5`,data:`{count, plural,`,display_text:`plural(`,deletable:!1,cloneable:!1,can_reorder:!1},D={span_type:`closing`,type:`code:function`,id:`5`,data:`}`,display_text:`)`,deletable:!1,cloneable:!1,can_reorder:!1},O={render:()=>(0,y.jsxs)(`div`,{style:{maxWidth:640,padding:16},children:[(0,y.jsx)(`h3`,{style:M,children:o(`7JA5kWJzRxc`,`Constraint Levels`)}),(0,y.jsx)(`p`,{style:N,children:o(`4RsCBCCj2TW`,`Vocabulary types define three orthogonal constraints. Tags display visual indicators based on their constraint level.`)}),(0,y.jsxs)(`div`,{style:P,children:[(0,y.jsx)(`h4`,{style:F,children:o(`knMojjb48g4`,`Fully Flexible`)}),(0,y.jsx)(`p`,{style:I,children:o(`9p6zmpDLMxi`,`Formatting tags like bold and italic can be freely deleted, duplicated, and reordered. Translators have full control.`)}),(0,y.jsx)(`div`,{style:R,children:i(`5Ad3gT9LL77`,`{=m0} {=m1} {=m2}No constraint indicators — full freedom{/=m2}`,{"=m0":(0,y.jsx)(s,{spanInfo:x,showConstraints:!0}),"=m1":(0,y.jsx)(s,{spanInfo:S,showConstraints:!0}),"=m2":(0,y.jsx)(`span`,{style:z,children:`No constraint indicators — full freedom`})})})]}),(0,y.jsxs)(`div`,{style:P,children:[(0,y.jsx)(`h4`,{style:F,children:o(`lKONWeVHZAu`,`Required Tags (non-deletable)`)}),(0,y.jsx)(`p`,{style:I,children:o(`amaDBZyTEaY`,`Line breaks and variables must appear in the translation. The editor prevents accidental deletion and shows a dashed border.`)}),(0,y.jsx)(`div`,{style:R,children:i(`icwb3OiloRV`,`{=m0} {=m1} {=m2} {=m3}Dashed border + * indicator{/=m3}`,{"=m0":(0,y.jsx)(s,{spanInfo:C,showConstraints:!0,locked:!0}),"=m1":(0,y.jsx)(s,{spanInfo:w,showConstraints:!0,locked:!0}),"=m2":(0,y.jsx)(s,{spanInfo:T,showConstraints:!0,locked:!0}),"=m3":(0,y.jsx)(`span`,{style:z,children:`Dashed border + * indicator`})})})]}),(0,y.jsxs)(`div`,{style:P,children:[(0,y.jsx)(`h4`,{style:F,children:o(`aiJN6hRXEyK`,`Fixed Position (non-reorderable)`)}),(0,y.jsx)(`p`,{style:I,children:o(`2L7WE7gBGwo`,`ICU plural/select functions and structural elements must maintain their position relative to other tags.`)}),(0,y.jsx)(`div`,{style:R,children:i(`8lRyitzmUVe`,`{=m0} {=m1} {=m2}Non-deletable + non-cloneable + fixed position{/=m2}`,{"=m0":(0,y.jsx)(s,{spanInfo:E,showConstraints:!0,locked:!0}),"=m1":(0,y.jsx)(s,{spanInfo:D,showConstraints:!0,locked:!0}),"=m2":(0,y.jsx)(`span`,{style:z,children:`Non-deletable + non-cloneable + fixed position`})})})]})]})},k={render:()=>{let e=[x,S,w,T,C],t=[x,S,w];return(0,y.jsxs)(`div`,{style:{maxWidth:640,padding:16},children:[(0,y.jsx)(`h3`,{style:M,children:o(`jTQVldRZw52`,`Palette Constraint Behavior`)}),(0,y.jsx)(`p`,{style:N,children:o(`ebVh9BaPmfD`,`When tags are already used in the target, the palette dims them. Non-cloneable tags are blocked (cannot be inserted again), while cloneable tags like bold remain insertable (just dimmed).`)}),(0,y.jsxs)(`div`,{style:{marginBottom:16},children:[(0,y.jsx)(`div`,{style:L,children:o(`SIfLAZqFfQ`,`Source tags:`)}),(0,y.jsx)(c,{sourceSpans:e,onInsert:()=>{},showCategoryGroups:!0})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`div`,{style:L,children:o(`8bKdylJmHNu`,`After using bold + variable in target:`)}),(0,y.jsx)(c,{sourceSpans:e,usedSpans:t,onInsert:()=>{},showCategoryGroups:!0}),(0,y.jsx)(`p`,{style:{...I,marginTop:8},children:o(`kCLp1ykIOq9`,`Bold tags are dimmed but still insertable (cloneable). The variable tag is blocked — hovering shows "cannot be duplicated".`)})]})]})}},A={render:()=>(0,y.jsxs)(`div`,{style:{maxWidth:640,padding:16},children:[(0,y.jsx)(`h3`,{style:M,children:o(`bS2xLVqt87C`,`Constraint Violation Messages`)}),(0,y.jsx)(`p`,{style:N,children:o(`kqvSXXqak7j`,`The validation bar shows real-time feedback when constraints are violated. Non-deletable tags generate errors when missing. Non-cloneable tags generate errors when duplicated.`)}),(0,y.jsxs)(`div`,{style:P,children:[(0,y.jsx)(`div`,{style:L,children:o(`khGCgVAyDiU`,`All tags present (valid):`)}),(0,y.jsx)(l,{validation:{valid:!0,errors:[],warnings:[]}}),(0,y.jsx)(`p`,{style:z,children:o(`26wdvJDRpy3`,`No validation bar shown — clean state.`)})]}),(0,y.jsxs)(`div`,{style:P,children:[(0,y.jsx)(`div`,{style:L,children:o(`44k3BSXKaEq`,`Required tags missing:`)}),(0,y.jsx)(l,{validation:{valid:!1,errors:[{type:`deleted_non_deletable`,message:`Missing 1 non-deletable placeholder "Variable" tag`},{type:`deleted_non_deletable`,message:`Missing 1 non-deletable placeholder "Line Break" tag`}],warnings:[]}})]}),(0,y.jsxs)(`div`,{style:P,children:[(0,y.jsx)(`div`,{style:L,children:o(`jUIozKTVu0c`,`Non-cloneable tag duplicated:`)}),(0,y.jsx)(l,{validation:{valid:!1,errors:[{type:`cloned_non_cloneable`,message:`Duplicated 1 non-cloneable placeholder "Variable" tag`}],warnings:[]}})]}),(0,y.jsxs)(`div`,{style:P,children:[(0,y.jsx)(`div`,{style:L,children:o(`15IvFuDbFwk`,`Multiple issues:`)}),(0,y.jsx)(l,{validation:{valid:!1,errors:[{type:`deleted_non_deletable`,message:`Missing 1 non-deletable placeholder "Placeholder" tag`},{type:`unpaired`,message:`Closing "Bold" without matching opening tag`}],warnings:[{type:`extra_tag`,message:`Extra 1 opening "Italic" tag`}]}})]})]})},j={render:()=>{let e={ph:{id:`1`,type:`code:variable`,data:`{userName}`,equiv:`userName`,disp:`{userName}`}},t={ph:{id:`2`,type:`code:placeholder`,data:`{count}`,equiv:`count`,disp:`{count}`}},[r,i]=g(`3`,`fmt:bold`,`<b>`,`</b>`,`b`),[a,s]=g(`4`,`link:hyperlink`,`<a href="/inbox">`,`</a>`,`a`),l=_(`Hello `,e,`, you have `,t,` new `,r,`messages`,i,` in your `,a,`inbox`,s,`.`,{ph:{id:`5`,type:`struct:break`,data:`<br/>`,equiv:`br`}},`Check them now.`),u=h(l);return(0,y.jsxs)(`div`,{style:{maxWidth:700,padding:16},children:[(0,y.jsx)(`h3`,{style:M,children:o(`6pSOP6nWoNH`,`Real-World: Notification Message`)}),(0,y.jsx)(`p`,{style:N,children:o(`biCCShTMr7v`,`A typical notification string mixing variables, formatting, links, and a line break. The legend shows how each type is constrained.`)}),(0,y.jsxs)(`div`,{style:{marginBottom:16},children:[(0,y.jsx)(`div`,{style:L,children:o(`exaJftkuCrH`,`Formatted view`)}),(0,y.jsx)(`div`,{style:{fontSize:14,lineHeight:1.8},children:(0,y.jsx)(p,{runs:l})})]}),(0,y.jsxs)(`div`,{style:{marginBottom:16},children:[(0,y.jsx)(`div`,{style:L,children:o(`58SAlaPhG0u`,`Code view`)}),(0,y.jsx)(`div`,{style:{fontSize:14,lineHeight:1.8},children:(0,y.jsx)(d,{runs:l})})]}),(0,y.jsxs)(`div`,{style:{marginBottom:16},children:[(0,y.jsx)(`div`,{style:L,children:o(`cyjC4PNXTFH`,`Tag palette`)}),(0,y.jsx)(c,{sourceSpans:u,onInsert:()=>{},showCategoryGroups:!0})]}),(0,y.jsx)(`div`,{children:(0,y.jsx)(n,{spans:u,onClose:()=>{}})})]})}},M={fontSize:14,fontWeight:600,marginBottom:4},N={fontSize:12,color:`#888`,marginBottom:16,lineHeight:1.5},P={marginBottom:20},F={fontSize:12,fontWeight:600,marginBottom:4},I={fontSize:11,color:`#888`,marginBottom:8,lineHeight:1.4},L={fontSize:10,fontWeight:600,color:`#888`,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:4},R={display:`flex`,alignItems:`center`,gap:6,flexWrap:`wrap`},z={fontSize:10,color:`#999`,fontStyle:`italic`,marginLeft:4},B=[`ConstraintOverview`,`PaletteConstraintBehavior`,`ConstraintViolations`,`RealWorldScenario`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 640,
    padding: 16
  }}>
      <h3 style={titleStyle}>Constraint Levels</h3>
      <p style={descStyle}>
        Vocabulary types define three orthogonal constraints. Tags display visual indicators based
        on their constraint level.
      </p>

      {/* Fully flexible */}
      <div style={sectionStyle}>
        <h4 style={sectionTitleStyle}>Fully Flexible</h4>
        <p style={sectionDescStyle}>
          Formatting tags like bold and italic can be freely deleted, duplicated, and reordered.
          Translators have full control.
        </p>
        <div style={chipRowStyle}>
          <TagChipComponent spanInfo={flexBoldOpen} showConstraints />
          <TagChipComponent spanInfo={flexBoldClose} showConstraints />
          <span style={hintStyle}>No constraint indicators — full freedom</span>
        </div>
      </div>

      {/* Required (non-deletable) */}
      <div style={sectionStyle}>
        <h4 style={sectionTitleStyle}>Required Tags (non-deletable)</h4>
        <p style={sectionDescStyle}>
          Line breaks and variables must appear in the translation. The editor prevents accidental
          deletion and shows a dashed border.
        </p>
        <div style={chipRowStyle}>
          <TagChipComponent spanInfo={requiredBreak} showConstraints locked />
          <TagChipComponent spanInfo={requiredVariable} showConstraints locked />
          <TagChipComponent spanInfo={requiredPlaceholder} showConstraints locked />
          <span style={hintStyle}>Dashed border + * indicator</span>
        </div>
      </div>

      {/* Fixed position (non-reorderable) */}
      <div style={sectionStyle}>
        <h4 style={sectionTitleStyle}>Fixed Position (non-reorderable)</h4>
        <p style={sectionDescStyle}>
          ICU plural/select functions and structural elements must maintain their position relative
          to other tags.
        </p>
        <div style={chipRowStyle}>
          <TagChipComponent spanInfo={fixedFunction} showConstraints locked />
          <TagChipComponent spanInfo={fixedFunctionClose} showConstraints locked />
          <span style={hintStyle}>Non-deletable + non-cloneable + fixed position</span>
        </div>
      </div>
    </div>
}`,...O.parameters?.docs?.source},description:{story:`Overview of all three constraint levels.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sourceSpans: SpanInfo[] = [flexBoldOpen, flexBoldClose, requiredVariable, requiredPlaceholder, requiredBreak];

    // Simulate: bold and variable already used in target
    const usedSpans: SpanInfo[] = [flexBoldOpen, flexBoldClose, requiredVariable];
    return <div style={{
      maxWidth: 640,
      padding: 16
    }}>
        <h3 style={titleStyle}>Palette Constraint Behavior</h3>
        <p style={descStyle}>
          When tags are already used in the target, the palette dims them. Non-cloneable tags are
          blocked (cannot be inserted again), while cloneable tags like bold remain insertable (just
          dimmed).
        </p>
        <div style={{
        marginBottom: 16
      }}>
          <div style={sectionLabel}>Source tags:</div>
          <TagPalette sourceSpans={sourceSpans} onInsert={() => {}} showCategoryGroups />
        </div>
        <div>
          <div style={sectionLabel}>After using bold + variable in target:</div>
          <TagPalette sourceSpans={sourceSpans} usedSpans={usedSpans} onInsert={() => {}} showCategoryGroups />
          <p style={{
          ...sectionDescStyle,
          marginTop: 8
        }}>
            Bold tags are dimmed but still insertable (cloneable). The variable tag is blocked —
            hovering shows "cannot be duplicated".
          </p>
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source},description:{story:`Tag palette showing how constrained tags behave when already used.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const validResult: TagValidationResult = {
      valid: true,
      errors: [],
      warnings: []
    };
    const missingRequired: TagValidationResult = {
      valid: false,
      errors: [{
        type: "deleted_non_deletable",
        message: 'Missing 1 non-deletable placeholder "Variable" tag'
      }, {
        type: "deleted_non_deletable",
        message: 'Missing 1 non-deletable placeholder "Line Break" tag'
      }],
      warnings: []
    };
    const duplicatedNonCloneable: TagValidationResult = {
      valid: false,
      errors: [{
        type: "cloned_non_cloneable",
        message: 'Duplicated 1 non-cloneable placeholder "Variable" tag'
      }],
      warnings: []
    };
    const mixedIssues: TagValidationResult = {
      valid: false,
      errors: [{
        type: "deleted_non_deletable",
        message: 'Missing 1 non-deletable placeholder "Placeholder" tag'
      }, {
        type: "unpaired",
        message: 'Closing "Bold" without matching opening tag'
      }],
      warnings: [{
        type: "extra_tag",
        message: 'Extra 1 opening "Italic" tag'
      }]
    };
    return <div style={{
      maxWidth: 640,
      padding: 16
    }}>
        <h3 style={titleStyle}>Constraint Violation Messages</h3>
        <p style={descStyle}>
          The validation bar shows real-time feedback when constraints are violated. Non-deletable
          tags generate errors when missing. Non-cloneable tags generate errors when duplicated.
        </p>

        <div style={sectionStyle}>
          <div style={sectionLabel}>All tags present (valid):</div>
          <TagValidationBar validation={validResult} />
          <p style={hintStyle}>No validation bar shown — clean state.</p>
        </div>

        <div style={sectionStyle}>
          <div style={sectionLabel}>Required tags missing:</div>
          <TagValidationBar validation={missingRequired} />
        </div>

        <div style={sectionStyle}>
          <div style={sectionLabel}>Non-cloneable tag duplicated:</div>
          <TagValidationBar validation={duplicatedNonCloneable} />
        </div>

        <div style={sectionStyle}>
          <div style={sectionLabel}>Multiple issues:</div>
          <TagValidationBar validation={mixedIssues} />
        </div>
      </div>;
  }
}`,...A.parameters?.docs?.source},description:{story:`Validation bar showing constraint violations.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    // The block's source as the reader produced it: variables, a bold pair, a
    // link and a line break, each a run.
    const userName: Run = {
      ph: {
        id: "1",
        type: "code:variable",
        data: "{userName}",
        equiv: "userName",
        disp: "{userName}"
      }
    };
    const count: Run = {
      ph: {
        id: "2",
        type: "code:placeholder",
        data: "{count}",
        equiv: "count",
        disp: "{count}"
      }
    };
    const [boldOpen, boldClose] = pair("3", "fmt:bold", "<b>", "</b>", "b");
    const [linkOpen, linkClose] = pair("4", "link:hyperlink", '<a href="/inbox">', "</a>", "a");
    const lineBreak: Run = {
      ph: {
        id: "5",
        type: "struct:break",
        data: "<br/>",
        equiv: "br"
      }
    };
    const sourceRuns = runsOf("Hello ", userName, ", you have ", count, " new ", boldOpen, "messages", boldClose, " in your ", linkOpen, "inbox", linkClose, ".", lineBreak, "Check them now.");
    const sourceSpans = codeSpans(sourceRuns);
    return <div style={{
      maxWidth: 700,
      padding: 16
    }}>
        <h3 style={titleStyle}>Real-World: Notification Message</h3>
        <p style={descStyle}>
          A typical notification string mixing variables, formatting, links, and a line break. The
          legend shows how each type is constrained.
        </p>

        <div style={{
        marginBottom: 16
      }}>
          <div style={sectionLabel}>Formatted view</div>
          <div style={{
          fontSize: 14,
          lineHeight: 1.8
        }}>
            <FormattedSourceDisplay runs={sourceRuns} />
          </div>
        </div>

        <div style={{
        marginBottom: 16
      }}>
          <div style={sectionLabel}>Code view</div>
          <div style={{
          fontSize: 14,
          lineHeight: 1.8
        }}>
            <SourceCellDisplay runs={sourceRuns} />
          </div>
        </div>

        <div style={{
        marginBottom: 16
      }}>
          <div style={sectionLabel}>Tag palette</div>
          <TagPalette sourceSpans={sourceSpans} onInsert={() => {}} showCategoryGroups />
        </div>

        <div>
          <InlineCodeLegend spans={sourceSpans} onClose={() => {}} />
        </div>
      </div>;
  }
}`,...j.parameters?.docs?.source},description:{story:`Full editing scenario showing how constraints protect content.`,...j.parameters?.docs?.description}}}})))()}V();export{O as ConstraintOverview,A as ConstraintViolations,k as PaletteConstraintBehavior,j as RealWorldScenario,B as __namedExportsOrder,b as default};