import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./src-C_IFyBUr.js";import{f as i}from"./CodedTextDisplay-BXCS8h7i.js";import{n as a,r as o,t as s}from"./runtime-DfFF6Hu8.js";import{l as c,s as l}from"./MemoryGroupedEntry-BssHxnLA.js";import{n as u,t as d}from"./SourceCellDisplay-KCQtyuT5.js";import{n as f,t as p}from"./FormattedSourceDisplay-DM_mzCeE.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{o(),r(),f(),u(),m=t(),h=``,g=``,_=``,v={title:`Editor/Formatting/ConstraintBehaviors`,tags:[`autodocs`],parameters:{docs:{description:{component:[`Demonstrates the three editing constraints defined by vocabularies.`,``,`Each inline code type declares constraints that control translator behavior:`,``,`| Constraint | What it controls | Example |`,`|---|---|---|`,`| **Deletable** | Can the tag be removed from the translation? | Line breaks and variables are non-deletable |`,`| **Cloneable** | Can the tag be duplicated in the translation? | Variables cannot be duplicated |`,`| **Reorderable** | Can the tag be moved relative to others? | ICU functions must stay in position |`,``,`Constraints are defined in the vocabulary but can be overridden per-span.`].join(`
`)}}}},y={span_type:`opening`,type:`fmt:bold`,id:`1`,data:`<b>`},b={span_type:`closing`,type:`fmt:bold`,id:`1`,data:`</b>`},x={span_type:`placeholder`,type:`struct:break`,id:`2`,data:`<br/>`,deletable:!1,cloneable:!1,can_reorder:!1},S={span_type:`placeholder`,type:`code:variable`,id:`3`,data:`{userName}`,display_text:`{userName}`,deletable:!1,cloneable:!1,can_reorder:!0},C={span_type:`placeholder`,type:`code:placeholder`,id:`4`,data:`{0}`,display_text:`{0}`,deletable:!1,cloneable:!1,can_reorder:!0},w={span_type:`opening`,type:`code:function`,id:`5`,data:`{count, plural,`,display_text:`plural(`,deletable:!1,cloneable:!1,can_reorder:!1},T={span_type:`closing`,type:`code:function`,id:`5`,data:`}`,display_text:`)`,deletable:!1,cloneable:!1,can_reorder:!1},E={render:()=>(0,m.jsxs)(`div`,{style:{maxWidth:640,padding:16},children:[(0,m.jsx)(`h3`,{style:A,children:s(`7JA5kWJzRxc`,`Constraint Levels`)}),(0,m.jsx)(`p`,{style:j,children:s(`4RsCBCCj2TW`,`Vocabulary types define three orthogonal constraints. Tags display visual indicators based on their constraint level.`)}),(0,m.jsxs)(`div`,{style:M,children:[(0,m.jsx)(`h4`,{style:N,children:s(`knMojjb48g4`,`Fully Flexible`)}),(0,m.jsx)(`p`,{style:P,children:s(`9p6zmpDLMxi`,`Formatting tags like bold and italic can be freely deleted, duplicated, and reordered. Translators have full control.`)}),(0,m.jsx)(`div`,{style:I,children:a(`5Ad3gT9LL77`,`{=m0} {=m1} {=m2}No constraint indicators — full freedom{/=m2}`,{"=m0":(0,m.jsx)(i,{spanInfo:y,showConstraints:!0}),"=m1":(0,m.jsx)(i,{spanInfo:b,showConstraints:!0}),"=m2":(0,m.jsx)(`span`,{style:L,children:`No constraint indicators — full freedom`})})})]}),(0,m.jsxs)(`div`,{style:M,children:[(0,m.jsx)(`h4`,{style:N,children:s(`lKONWeVHZAu`,`Required Tags (non-deletable)`)}),(0,m.jsx)(`p`,{style:P,children:s(`amaDBZyTEaY`,`Line breaks and variables must appear in the translation. The editor prevents accidental deletion and shows a dashed border.`)}),(0,m.jsx)(`div`,{style:I,children:a(`icwb3OiloRV`,`{=m0} {=m1} {=m2} {=m3}Dashed border + * indicator{/=m3}`,{"=m0":(0,m.jsx)(i,{spanInfo:x,showConstraints:!0,locked:!0}),"=m1":(0,m.jsx)(i,{spanInfo:S,showConstraints:!0,locked:!0}),"=m2":(0,m.jsx)(i,{spanInfo:C,showConstraints:!0,locked:!0}),"=m3":(0,m.jsx)(`span`,{style:L,children:`Dashed border + * indicator`})})})]}),(0,m.jsxs)(`div`,{style:M,children:[(0,m.jsx)(`h4`,{style:N,children:s(`aiJN6hRXEyK`,`Fixed Position (non-reorderable)`)}),(0,m.jsx)(`p`,{style:P,children:s(`2L7WE7gBGwo`,`ICU plural/select functions and structural elements must maintain their position relative to other tags.`)}),(0,m.jsx)(`div`,{style:I,children:a(`8lRyitzmUVe`,`{=m0} {=m1} {=m2}Non-deletable + non-cloneable + fixed position{/=m2}`,{"=m0":(0,m.jsx)(i,{spanInfo:w,showConstraints:!0,locked:!0}),"=m1":(0,m.jsx)(i,{spanInfo:T,showConstraints:!0,locked:!0}),"=m2":(0,m.jsx)(`span`,{style:L,children:`Non-deletable + non-cloneable + fixed position`})})})]})]})},D={render:()=>{let e=[y,b,S,C,x],t=[y,b,S];return(0,m.jsxs)(`div`,{style:{maxWidth:640,padding:16},children:[(0,m.jsx)(`h3`,{style:A,children:s(`jTQVldRZw52`,`Palette Constraint Behavior`)}),(0,m.jsx)(`p`,{style:j,children:s(`ebVh9BaPmfD`,`When tags are already used in the target, the palette dims them. Non-cloneable tags are blocked (cannot be inserted again), while cloneable tags like bold remain insertable (just dimmed).`)}),(0,m.jsxs)(`div`,{style:{marginBottom:16},children:[(0,m.jsx)(`div`,{style:F,children:s(`SIfLAZqFfQ`,`Source tags:`)}),(0,m.jsx)(c,{sourceSpans:e,onInsert:()=>{},showCategoryGroups:!0})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{style:F,children:s(`8bKdylJmHNu`,`After using bold + variable in target:`)}),(0,m.jsx)(c,{sourceSpans:e,usedSpans:t,onInsert:()=>{},showCategoryGroups:!0}),(0,m.jsx)(`p`,{style:{...P,marginTop:8},children:s(`kCLp1ykIOq9`,`Bold tags are dimmed but still insertable (cloneable). The variable tag is blocked — hovering shows "cannot be duplicated".`)})]})]})}},O={render:()=>(0,m.jsxs)(`div`,{style:{maxWidth:640,padding:16},children:[(0,m.jsx)(`h3`,{style:A,children:s(`bS2xLVqt87C`,`Constraint Violation Messages`)}),(0,m.jsx)(`p`,{style:j,children:s(`kqvSXXqak7j`,`The validation bar shows real-time feedback when constraints are violated. Non-deletable tags generate errors when missing. Non-cloneable tags generate errors when duplicated.`)}),(0,m.jsxs)(`div`,{style:M,children:[(0,m.jsx)(`div`,{style:F,children:s(`khGCgVAyDiU`,`All tags present (valid):`)}),(0,m.jsx)(l,{validation:{valid:!0,errors:[],warnings:[]}}),(0,m.jsx)(`p`,{style:L,children:s(`26wdvJDRpy3`,`No validation bar shown — clean state.`)})]}),(0,m.jsxs)(`div`,{style:M,children:[(0,m.jsx)(`div`,{style:F,children:s(`44k3BSXKaEq`,`Required tags missing:`)}),(0,m.jsx)(l,{validation:{valid:!1,errors:[{type:`deleted_non_deletable`,message:`Missing 1 non-deletable placeholder "Variable" tag`},{type:`deleted_non_deletable`,message:`Missing 1 non-deletable placeholder "Line Break" tag`}],warnings:[]}})]}),(0,m.jsxs)(`div`,{style:M,children:[(0,m.jsx)(`div`,{style:F,children:s(`jUIozKTVu0c`,`Non-cloneable tag duplicated:`)}),(0,m.jsx)(l,{validation:{valid:!1,errors:[{type:`cloned_non_cloneable`,message:`Duplicated 1 non-cloneable placeholder "Variable" tag`}],warnings:[]}})]}),(0,m.jsxs)(`div`,{style:M,children:[(0,m.jsx)(`div`,{style:F,children:s(`15IvFuDbFwk`,`Multiple issues:`)}),(0,m.jsx)(l,{validation:{valid:!1,errors:[{type:`deleted_non_deletable`,message:`Missing 1 non-deletable placeholder "Placeholder" tag`},{type:`unpaired`,message:`Closing "Bold" without matching opening tag`}],warnings:[{type:`extra_tag`,message:`Extra 1 opening "Italic" tag`}]}})]})]})},k={render:()=>{let e=`Hello ${_}, you have ${_} new ${h}messages${g} in your ${h}inbox${g}.${_}Check them now.`,t=[{span_type:`placeholder`,type:`code:variable`,id:`1`,data:`{userName}`,display_text:`{userName}`,deletable:!1,cloneable:!1,can_reorder:!0},{span_type:`placeholder`,type:`code:placeholder`,id:`2`,data:`{count}`,display_text:`{count}`,deletable:!1,cloneable:!1,can_reorder:!0},{span_type:`opening`,type:`fmt:bold`,id:`3`,data:`<b>`},{span_type:`closing`,type:`fmt:bold`,id:`3`,data:`</b>`},{span_type:`opening`,type:`link:hyperlink`,id:`4`,data:`<a href="/inbox">`},{span_type:`closing`,type:`link:hyperlink`,id:`4`,data:`</a>`},{span_type:`placeholder`,type:`struct:break`,id:`5`,data:`<br/>`,deletable:!1,cloneable:!1,can_reorder:!1}];return(0,m.jsxs)(`div`,{style:{maxWidth:700,padding:16},children:[(0,m.jsx)(`h3`,{style:A,children:s(`6pSOP6nWoNH`,`Real-World: Notification Message`)}),(0,m.jsx)(`p`,{style:j,children:s(`biCCShTMr7v`,`A typical notification string mixing variables, formatting, links, and a line break. The legend shows how each type is constrained.`)}),(0,m.jsxs)(`div`,{style:{marginBottom:16},children:[(0,m.jsx)(`div`,{style:F,children:s(`exaJftkuCrH`,`Formatted view`)}),(0,m.jsx)(`div`,{style:{fontSize:14,lineHeight:1.8},children:(0,m.jsx)(p,{codedText:e,spans:t})})]}),(0,m.jsxs)(`div`,{style:{marginBottom:16},children:[(0,m.jsx)(`div`,{style:F,children:s(`58SAlaPhG0u`,`Code view`)}),(0,m.jsx)(`div`,{style:{fontSize:14,lineHeight:1.8},children:(0,m.jsx)(d,{codedText:e,spans:t})})]}),(0,m.jsxs)(`div`,{style:{marginBottom:16},children:[(0,m.jsx)(`div`,{style:F,children:s(`cyjC4PNXTFH`,`Tag palette`)}),(0,m.jsx)(c,{sourceSpans:t,onInsert:()=>{},showCategoryGroups:!0})]}),(0,m.jsx)(`div`,{children:(0,m.jsx)(n,{spans:t,onClose:()=>{}})})]})}},A={fontSize:14,fontWeight:600,marginBottom:4},j={fontSize:12,color:`#888`,marginBottom:16,lineHeight:1.5},M={marginBottom:20},N={fontSize:12,fontWeight:600,marginBottom:4},P={fontSize:11,color:`#888`,marginBottom:8,lineHeight:1.4},F={fontSize:10,fontWeight:600,color:`#888`,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:4},I={display:`flex`,alignItems:`center`,gap:6,flexWrap:`wrap`},L={fontSize:10,color:`#999`,fontStyle:`italic`,marginLeft:4},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Overview of all three constraint levels.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Tag palette showing how constrained tags behave when already used.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Validation bar showing constraint violations.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sourceText = \`Hello \${P}, you have \${P} new \${O}messages\${C} in your \${O}inbox\${C}.\${P}Check them now.\`;
    const sourceSpans: SpanInfo[] = [{
      span_type: "placeholder",
      type: "code:variable",
      id: "1",
      data: "{userName}",
      display_text: "{userName}",
      deletable: false,
      cloneable: false,
      can_reorder: true
    }, {
      span_type: "placeholder",
      type: "code:placeholder",
      id: "2",
      data: "{count}",
      display_text: "{count}",
      deletable: false,
      cloneable: false,
      can_reorder: true
    }, {
      span_type: "opening",
      type: "fmt:bold",
      id: "3",
      data: "<b>"
    }, {
      span_type: "closing",
      type: "fmt:bold",
      id: "3",
      data: "</b>"
    }, {
      span_type: "opening",
      type: "link:hyperlink",
      id: "4",
      data: '<a href="/inbox">'
    }, {
      span_type: "closing",
      type: "link:hyperlink",
      id: "4",
      data: "</a>"
    }, {
      span_type: "placeholder",
      type: "struct:break",
      id: "5",
      data: "<br/>",
      deletable: false,
      cloneable: false,
      can_reorder: false
    }];
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
            <FormattedSourceDisplay codedText={sourceText} spans={sourceSpans} />
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
            <SourceCellDisplay codedText={sourceText} spans={sourceSpans} />
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
}`,...k.parameters?.docs?.source},description:{story:`Full editing scenario showing how constraints protect content.`,...k.parameters?.docs?.description}}},R=[`ConstraintOverview`,`PaletteConstraintBehavior`,`ConstraintViolations`,`RealWorldScenario`]})))()}z();export{E as ConstraintOverview,O as ConstraintViolations,D as PaletteConstraintBehavior,k as RealWorldScenario,R as __namedExportsOrder,v as default};