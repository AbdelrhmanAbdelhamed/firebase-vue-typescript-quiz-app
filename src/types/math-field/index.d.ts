/**
 * @typedef {function} MathFieldCallback
 * @param {MathField} mf
 * @return {void}
 * @global
 */
export type MathFieldCallback = (mf: MathField) => void;

/*
@typedef MathFieldConfig
@type {Object}
@property {string} locale?
@property {object<string, string>} strings?
@property {number} horizontalSpacingScale?
@property {string} namespace?
@property {function} substituteTextArea?
@property {"math" | "text"} defaultMode?
@property {MathFieldCallback} onFocus?
@property {MathFieldCallback} onBlur?
@property {function} onKeystroke?
@property {function} onAnnounce?
@property {boolean} overrideDefaultInlineShortcuts?
@property {object<string, string>} inlineShortcuts?
@property {number} inlineShortcutTimeout?
@property {boolean} smartFence?
@property {boolean} smartSuperscript?
@property {number} scriptDepth?
@property {boolean} removeExtraneousParentheses?
@property {boolean} ignoreSpacebarInMathMode?
@property {string} virtualKeyboardToggleGlyph?
@property {"manual" | "onfocus" | "off" } virtualKeyboardMode?
@property {"all" | "numeric" | "roman" | "greek" | "functions" | "command" | string} virtualKeyboards?
@property {"qwerty" | "azerty" | "qwertz" | "dvorak" | "colemak"} virtualKeyboardRomanLayout?
@property {object<string, string>} customVirtualKeyboardLayers?
@property {object<string, object>} customVirtualKeyboards?
@property {"material" | "apple" | ""} virtualKeyboardTheme?
@property {boolean} keypressVibration?
@property {string} keypressSound?
@property {string} plonkSound?
@property {"mathlive" | "sre"} textToSpeechRules?
@property {"ssml" | "mac"} textToSpeechMarkup?
@property {object} textToSpeechRulesOptions?
@property {"local" | "amazon"} speechEngine?
@property {string} speechEngineVoice?
@property {string} speechEngineRate?
@property {function} onMoveOutOf?
@property {function} onTabOutOf?
@property {MathFieldCallback} onContentWillChange?
@property {MathFieldCallback} onContentDidChange?
@property {MathFieldCallback} onSelectionWillChange?
@property {MathFieldCallback} onSelectionDidChange?
@property {function} onUndoStateWillChange?
@property {function} onUndoStateDidChange?
@property {function} onModeChange?
@property {function} onVirtualKeyboardToggle?
@property {function} onReadAloudStatus?
@property {function} handleSpeak?
@property {function} handleReadAloud?
@global
*/
export type MathFieldConfig = {
  locale?: string;
  strings?: {
    [key: string]: string;
  };
  horizontalSpacingScale?: number;
  namespace?: string;
  substituteTextArea?: (...params: any[]) => any;
  defaultMode?: "math" | "text";
  onFocus?: MathFieldCallback;
  onBlur?: MathFieldCallback;
  onKeystroke?: (...params: any[]) => any;
  onAnnounce?: (...params: any[]) => any;
  overrideDefaultInlineShortcuts?: boolean;
  inlineShortcuts?: {
    [key: string]: string;
  };
  inlineShortcutTimeout?: number;
  smartFence?: boolean;
  smartSuperscript?: boolean;
  scriptDepth?: number;
  removeExtraneousParentheses?: boolean;
  ignoreSpacebarInMathMode?: boolean;
  virtualKeyboardToggleGlyph?: string;
  virtualKeyboardMode?: "manual" | "onfocus" | "off";
  virtualKeyboards?: "all" | "numeric" | "roman" | "greek" | "functions" | "command" | string;
  virtualKeyboardRomanLayout?: "qwerty" | "azerty" | "qwertz" | "dvorak" | "colemak";
  customVirtualKeyboardLayers?: {
    [key: string]: string;
  };
  customVirtualKeyboards?: {
    [key: string]: object;
  };
  virtualKeyboardTheme?: "material" | "apple" | "";
  keypressVibration?: boolean;
  keypressSound?: string;
  plonkSound?: string;
  textToSpeechRules?: "mathlive" | "sre";
  textToSpeechMarkup?: "ssml" | "mac";
  textToSpeechRulesOptions?: any;
  speechEngine?: "local" | "amazon";
  speechEngineVoice?: string;
  speechEngineRate?: string;
  onMoveOutOf?: (...params: any[]) => any;
  onTabOutOf?: (...params: any[]) => any;
  onContentWillChange?: MathFieldCallback;
  onContentDidChange?: MathFieldCallback;
  onSelectionWillChange?: MathFieldCallback;
  onSelectionDidChange?: MathFieldCallback;
  onUndoStateWillChange?: (...params: any[]) => any;
  onUndoStateDidChange?: (...params: any[]) => any;
  onModeChange?: (...params: any[]) => any;
  onVirtualKeyboardToggle?: (...params: any[]) => any;
  onReadAloudStatus?: (...params: any[]) => any;
  handleSpeak?: (...params: any[]) => any;
  handleReadAloud?: (...params: any[]) => any;
};
export interface MathField {
  /**
   * Revert this math field to its original content. After this method has been
   * called, no other methods can be called on the MathField object. To turn the
   * element back into a MathField, call `MathLive.makeMathField()` on the
   * element again to get a new math field object.
   *
   * @method MathField#$revertToOriginalContent
   */
  revertToOriginalContent(): void;
  /**
   * @param {string|string[]} command - A selector, or an array whose first element
   * is a selector, and whose subsequent elements are arguments to the selector.
   * Note that selectors do not include a final "_". They can be passed either
   * in camelCase or kebab-case. So:
   * ```javascript
   * mf.perform('selectAll');
   * mf.perform('select-all');
   * ```
   * both calls are valid and invoke the same selector.
   *
   * @method MathField#$perform
   */
  perform(command: string | string[]): void;
  /**
   * Return a textual representation of the mathfield.
   * @param {string} [format='latex']. One of
   * * `'latex'`
   * * `'latex-expanded'` : all macros are recursively expanded to their definition
   * * `'spoken'`
   * * `'spoken-text'`
   * * `'spoken-ssml'`
   * * `spoken-ssml-withHighlighting`
   * * `'mathML'`
   * * `'json'`
   * @return {string}
   * @method MathField#$text
   */
  text(format?: string): string;
  /**
   * Return a textual representation of the selection in the mathfield.
   * @param {string} [format='latex']. One of
   * * `'latex'`
   * * `'latex-expanded'` : all macros are recursively expanded to their definition
   * * `'spoken'`
   * * `'spoken-text'`
   * * `'spoken-ssml'`
   * * `spoken-ssml-withHighlighting`
   * * `'mathML'`
   * * `'json'`
   * @return {string}
   * @method MathField#$selectedText
   */
  selectedText(format?: string): string;
  /**
   * Return true if the length of the selection is 0, that is, if it is a single
   * insertion point.
   * @return {boolean}
   * @method MathField#$selectionIsCollapsed
   */
  selectionIsCollapsed(): boolean;
  /**
   * Return the depth of the selection group. If the selection is at the root level,
   * returns 0. If the selection is a portion of the numerator of a fraction
   * which is at the root level, return 1. Note that in that case, the numerator
   * would be the "selection group".
   * @return {number}
   * @method MathField#$selectionDepth
   */
  selectionDepth(): number;
  /**
   * Return true if the selection starts at the beginning of the selection group.
   * @return {boolean}
   * @method MathField#$selectionAtStart
   */
  selectionAtStart(): boolean;
  /**
   * Return true if the selection extends to the end of the selection group.
   * @return {boolean}
   * @method MathField#$selectionAtEnd
   */
  selectionAtEnd(): boolean;
  /**
   * If `text` is not empty, sets the content of the mathfield to the
   * text interpreted as a LaTeX expression.
   * If `text` is empty (or omitted), return the content of the mahtfield as a
   * LaTeX expression.
   * @param {string} text
   *
   * @param {Object.<string, any>} options
   * @param {boolean} options.suppressChangeNotifications - If true, the
   * handlers for the contentWillChange and contentDidChange notifications will
   * not be invoked. Default `false`.
   *
   * @return {string}
   * @method MathField#$latex
   */
  latex(
    text: string,
    options: {
      suppressChangeNotifications: boolean;
    }
  ): string;
  /**
   * Return the DOM element associated with this mathfield.
   *
   * Note that `this.$el().mathfield = this`
   * @return {HTMLElement}
   * @method MathField#$el
   */
  el(): HTMLElement;
  /**
   * This method can be invoked as a selector with {@linkcode MathField#$perform $perform("insert")}
   * or called explicitly.
   *
   * It will insert the specified block of text at the current insertion point,
   * according to the insertion mode specified.
   *
   * After the insertion, the selection will be set according to the `selectionMode`.
   * @param {string} s - The text to be inserted
   *
   * @param {Object.<string, any>} [options={}]
   *
   * @param {'placeholder' | 'after' | 'before' | 'item'} options.selectionMode - Describes where the selection
   * will be after the insertion:
   * * `'placeholder'`: the selection will be the first available placeholder
   * in the item that has been inserted (default)
   * * `'after'`: the selection will be an insertion point after the item that
   * has been inserted,
   * * `'before'`: the selection will be an insertion point before
   * the item that has been inserted
   * * `'item'`: the item that was inserted will be selected
   *
   * @param {'auto' | 'latex'} options.format - The format of the string `s`:
   * * `'auto'`: the string is interpreted as a latex fragment or command)
   * (default)
   * * `'latex'`: the string is interpreted strictly as a latex fragment
   *
   * @param {boolean} options.focus - If true, the mathfield will be focused after
   * the insertion
   *
   * @param {boolean} options.feedback - If true, provide audio and haptic feedback
   *
   * @param {'text' | 'math' | ''} options.mode - 'text' or 'math'. If empty, the current mode
   * is used (default)
   *
   * @param {boolean} options.resetStyle - If true, the style after the insertion
   * is the same as the style before (if false, the style after the
   * insertion is the style of the last inserted atom).
   *
   * @method MathField#$insert
   */
  insert(
    s: string,
    options?: {
      selectionMode: "placeholder" | "after" | "before" | "item";
      format: "auto" | "latex";
      focus: boolean;
      feedback: boolean;
      mode: "text" | "math" | "";
      resetStyle: boolean;
    }
  ): void;
  /**
   * Apply a style (color, bold, italic, etc...).
   *
   * If there is a selection, the style is applied to the selection
   *
   * If the selection already has this style, remove it. If the selection
   * has the style partially applied (i.e. only some sections), remove it from
   * those sections, and apply it to the entire selection.
   *
   * If there is no selection, the style will apply to the next character typed.
   *
   * @param {object} style  an object with the following properties. All the
   * properties are optional, but they can be combined.
   *
   * @param {string} [style.mode=''] - Either `'math'`, `'text'` or '`command`'
   * @param {string} [style.color=''] - The text/fill color, as a CSS RGB value or
   * a string for some 'well-known' colors, e.g. 'red', '#f00', etc...
   *
   * @param {string} [style.backgroundColor=''] - The background color.
   *
   * @param {string} [style.fontFamily=''] - The font family used to render text.
   * This value can the name of a locally available font, or a CSS font stack, e.g.
   * "Avenir", "Georgia, serif", etc...
   * This can also be one of the following TeX-specific values:
   * - 'cmr': Computer Modern Roman, serif
   * - 'cmss': Computer Modern Sans-serif, latin characters only
   * - 'cmtt': Typewriter, slab, latin characters only
   * - 'cal': Calligraphic style, uppercase latin letters and digits only
   * - 'frak': Fraktur, gothic, uppercase, lowercase and digits
   * - 'bb': Blackboard bold, uppercase only
   * - 'scr': Script style, uppercase only
   *
   * @param {string} [style.series=''] - The font 'series', i.e. weight and
   * stretch. The following values can be combined, for example: "ebc": extra-bold,
   * condensed. Aside from 'b', these attributes may not have visible effect if the
   * font family does not support this attribute:
   * - 'ul' ultra-light weight
   * - 'el': extra-light
   * - 'l': light
   * - 'sl': semi-light
   * - 'm': medium (default)
   * - 'sb': semi-bold
   * - 'b': bold
   * - 'eb': extra-bold
   * - 'ub': ultra-bold
   * - 'uc': ultra-condensed
   * - 'ec': extra-condensed
   * - 'c': condensed
   * - 'sc': semi-condensed
   * - 'n': normal (default)
   * - 'sx': semi-expanded
   * - 'x': expanded
   * - 'ex': extra-expanded
   * - 'ux': ultra-expanded
   *
   * @param {string} [style.shape=''] - The font 'shape', i.e. italic.
   * - 'auto': italic or upright, depending on mode and letter (single letters are
   * italic in math mode)
   * - 'up': upright
   * - 'it': italic
   * - 'sl': slanted or oblique (often the same as italic)
   * - 'sc': small caps
   * - 'ol': outline
   *
   * @param {string} [style.size=''] - The font size:  'size1'...'size10'
   * 'size5' is the default size
   * @method MathField#$applyStyle
   *
   */
  applyStyle(style: {
    mode?: string;
    color?: string;
    backgroundColor?: string;
    fontFamily?: string;
    series?: string;
    shape?: string;
    size?: string;
  }): void;
  /**
   * @param {string} keys - A string representation of a key combination.
   *
   * For example `'Alt-KeyU'`.
   *
   * See [W3C UIEvents](https://www.w3.org/TR/uievents/#code-virtual-keyboards)
   * @param {Event} evt
   * @return {boolean}
   * @method MathField#$keystroke
   */
  keystroke(keys: string, evt: Event): boolean;
  /**
   * Simulate a user typing the keys indicated by text.
   * @param {string} text - A sequence of one or more characters.
   * @method MathField#$typedText
   */
  typedText(text: string): void;
  /**
   *
   * Update the configuration options for this mathfield.
   *
   * @param {MathFieldConfig} [config={}] See {@tutorial CONFIG} for details.
   *
   * @method MathField#$setConfig
   */
  setConfig(config?: MathFieldConfig): void;
  /**
   *
   * Speak some part of the expression, either with or without synchronized highlighting.
   *
   * @param {string} amount (all, selection, left, right, group, parent)
   * @param {object} speakOptions
   * @param {boolean} speakOptions.withHighlighting - If true, synchronized highlighting of speech will happen (if possible). Default is false.
   *
   * @method MathField#speak_
   */
  speak_(
    amount: string,
    speakOptions: {
      withHighlighting: boolean;
    }
  ): void;
  /**
   * The DOM element this mathfield is attached to.
   */
  element: HTMLElement;
  /**
   * A set of key/value pairs that can
  be used to customize the behavior of the mathfield
  */
  config: {
    [key: string]: any;
  };
  /**
   * A unique ID identifying this mathfield
   */
  id: string;
  /**
   * True if the keystroke caption
  panel is visible
  */
  keystrokeCaptionVisible: boolean;
  /**
   * True if the virtual keyboard is
  visible
  */
  virtualKeyboardVisible: boolean;
  /**
   * The last few keystrokes, to look out
  for inline shortcuts
  */
  keystrokeBuffer: string;
  /**
   * The saved state for each of the
  past keystrokes
  */
  keystrokeBufferStates: object[];
}
