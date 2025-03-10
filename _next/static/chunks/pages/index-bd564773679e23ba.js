(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5728: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(2300);
        },
      ]);
    },
    3653: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(5893),
        i = t(602),
        s = t.n(i);
      function o(e) {
        var n = e.colors;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("data", {
            id: "page-specific-colors",
            className: s().colors,
            children: [
              (0, a.jsx)(r, { colors: n.dark }),
              (0, a.jsx)(c, { colors: n.unicorn }),
              (0, a.jsx)(l, { colors: n.light }),
              (0, a.jsx)("svg", {
                "aria-hidden": "true",
                focusable: "false",
                children: (0, a.jsxs)("linearGradient", {
                  id: "fa-gradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "175%",
                  y2: "175%",
                  children: [
                    (0, a.jsx)("stop", {
                      offset: "0%",
                      stopColor: "var(--neon-1-2)",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "100%",
                      stopColor: "var(--neon-1-1)",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function r(e) {
        var n = e.colors;
        if (0 != Object.keys(n).length)
          return (0, a.jsx)("style", {
            children:
              "\n\t\t\t\t:root[data-theme=dark] {\n\t\t\t\t\t--mesh-color-1: "
                .concat(n.mesh__secondaryDark, ";\n\t\t\t\t\t--mesh-color-2: ")
                .concat(n.mesh__secondaryLight, ";\n\t\t\t\t\t--mesh-color-3: ")
                .concat(n.mesh__primaryDark, ";\n\t\t\t\t\t--mesh-color-4: ")
                .concat(n.mesh__primaryLight, ";\n\t\t\t\t}\n\t\t\t\t"),
          });
      }
      function c(e) {
        var n = e.colors;
        if (0 != Object.keys(n).length)
          return (0, a.jsx)("style", {
            children:
              "\n\t\t\t\t:root[data-theme=unicorn] {\n\t\t\t\t\t--mesh-color-1: "
                .concat(n.mesh__secondaryDark, ";\n\t\t\t\t\t--mesh-color-2: ")
                .concat(n.mesh__secondaryLight, ";\n\t\t\t\t\t--mesh-color-3: ")
                .concat(n.mesh__primaryDark, ";\n\t\t\t\t\t--mesh-color-4: ")
                .concat(n.mesh__primaryLight, ";\n\t\t\t\t}\n\t\t\t\t"),
          });
      }
      function l(e) {
        var n = e.colors;
        if (0 != Object.keys(n).length)
          return (0, a.jsx)("style", {
            children:
              "\n\t\t\t\t:root[data-theme=light] {\n\t\t\t\t\t--mesh-color-1: "
                .concat(n.mesh__secondaryDark, ";\n\t\t\t\t\t--mesh-color-2: ")
                .concat(n.mesh__secondaryLight, ";\n\t\t\t\t\t--mesh-color-3: ")
                .concat(n.mesh__primaryDark, ";\n\t\t\t\t\t--mesh-color-4: ")
                .concat(n.mesh__primaryLight, ";\n\t\t\t\t}\n\t\t\t\t"),
          });
      }
    },
    2300: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return ae;
          },
        });
      var a = t(5893),
        i = t(7294),
        s = t(9844),
        o = t(5322),
        r = t(7738),
        c = t(5992),
        l = t(8285),
        d = t(5675),
        h = t.n(d),
        m = t(1179),
        p = t.n(m);
      function g() {
        return (0, a.jsxs)("div", {
          className: "".concat(p().colorfulV1),
          children: [
            (0, a.jsx)("div", {
              className: "".concat(p().barContainer, " noEvents"),
              children: (0, a.jsx)("div", {
                className: "".concat(p().barGradient),
              }),
            }),
            (0, a.jsx)("div", {
              className: "".concat(p().radialContainer, " noEvents"),
              children: (0, a.jsx)("div", {
                className: "".concat(p().radialGradient),
              }),
            }),
          ],
        });
      }
      var y = t(504),
        u = t.n(y),
        _ = JSON.parse(
          '{"mf":{"BL":"const Abdullah = ( name, passion ) =>","ut":"Hello, my name is","NS":60,"C":80,"YS":"h2","wH":1000,"cG":3000,"Kj":12000},"Fs":{"u":"Abdullah Jawed","l":"I design and build meaningful experiences."},"An":"A tech geek and a lifelong learner \u2014 driven by a passion for tackling new challenges and working on projects that make a meaningful impact.","ZY":{"T":{"TN":"Contact Me"},"B":{"TN":"LinkedIn"}}}'
        );
      function v() {
        var e = (0, i.useState)("Initializing"),
          n = (e[0], e[1]);
        return (0, a.jsxs)(o.Z, {
          classProp: "".concat(p().section),
          children: [
            (0, a.jsxs)(r.Z, {
              spacing: "VerticalXXXL",
              children: [
                (0, a.jsx)(s.e, {
                  className: "".concat(p().preHeader),
                  sequence: [
                    _.mf.wH,
                    function () {
                      n("typing");
                    },
                    _.mf.BL,
                    function () {
                      n("typed");
                    },
                    _.mf.cG,
                    function () {
                      n("deleting");
                    },
                    _.mf.ut,
                    function () {
                      n("deleted");
                    },
                    _.mf.Kj,
                  ],
                  speed: _.mf.NS,
                  deletionSpeed: _.mf.C,
                  wrapper: _.mf.YS,
                  repeat: 1 / 0,
                }),
                (0, a.jsxs)("section", {
                  children: [
                    (0, a.jsx)("h1", {
                      className: p().header,
                      children: _.Fs.u,
                    }),
                    (0, a.jsx)("h1", {
                      className: ""
                        .concat(p().header, " ")
                        .concat(p().primaryDim),
                      children: _.Fs.l,
                    }),
                  ],
                }),
                (0, a.jsx)("section", {
                  children: (0, a.jsx)("p", {
                    className: ""
                      .concat(p().primaryBright, " subtitle ")
                      .concat((0, c.Z)(["verticalLrg"])),
                    children: _.An,
                  }),
                }),
                (0, a.jsxs)("section", {
                  children: [
                    (0, a.jsx)("button", {
                      className: "button ".concat(u().primary),
                      onClick: function () {
                        return (window.location = "mailto:abdullahjawed.aj12@gmail.com");
                      },
                      children: _.ZY.T.TN,
                    }),
                    (0, a.jsx)("button", {
                      className: "button ".concat(u().secondary, " leaveSite"),
                      onClick: function () {
                        return window.open(
                          "https://www.linkedin.com/in/abdullah-jawed/",
                          "_blank"
                        );
                      },
                      children: _.ZY.B.TN,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(g, { theme: "bg-color-1" }),
          ],
        });
      }
      t(357);
      var j = t(82),
        f = t.n(j);
      function x(e) {
        var n = e.preTitle,
          t = e.title,
          i = e.subTitle;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: "".concat(f().title),
            children: [
              (0, a.jsx)("h4", { children: n }),
              (0, a.jsx)("h2", { children: t }),
              (0, a.jsx)("h3", { className: "subtitle", children: i }),
            ],
          }),
        });
      }
      var k = t(769),
        b = t.n(k);
      function N() {
        return (0, a.jsx)(o.Z, {
          classProp: "".concat(b().section, " borderBottom"),
          children: (0, a.jsxs)(r.Z, {
            classProp: "".concat(f().title, " ").concat(b().container),
            spacing: ["verticalXXXLrg"],
            children: [
              (0, a.jsx)("h4", {
                children: "Services in software development, including AI/ML solutions, are provided.",
              }),
              (0, a.jsx)("h2", { className: b().json, children: "Projects : {" }),
              (0, a.jsxs)("h2", {
                className: b().jsonSub,
                children: [
                  (0, a.jsx)("span", {
                    className: b().highlight,
                    children: "Custom LLM chatbot",
                  }),
                  ",",
                ],
              }),
              (0, a.jsx)("h2", {
                className: b().jsonSub,
                children: (0, a.jsx)("span", {
                  className: b().highlight2,
                  children: " Computer vision solutions ",
                }),
              }),

              (0, a.jsx)("h2", {
                className: b().jsonSub,
                children: (0, a.jsx)("span", {
                  className: b().highlight,
                  children: " Web applications etc",
                }),
              }),
              (0, a.jsx)("h2", { className: b().json, children: "}" }),
              (0, a.jsx)("h4", {
                children:
                  "I specialize in offering a diverse array of AI/ML solutions designed to automate and enhance your business operations.",
              }),
            ],
          }),
        });
      }
      var C = t(2233),
        w = t(8984),
        S = t(7650),
        I = t(5882),
        T = t.n(I);
      function P(e) {
        var n = e.list,
          t = e.block,
          s = e.color,
          o = e.fullContainer,
          r = (0, C._)(),
          c = (0, S.YD)({ threshold: 0.5, triggerOnce: !1 }),
          l = c.ref,
          d = c.inView;
        (0, i.useEffect)(
          function () {
            d && r.start("visible"), d || r.start("hidden");
          },
          [r, d]
        );
        var h = {
          hidden: { y: 20, opacity: -0.5 },
          visible: { y: 0, opacity: 1 },
        };
        return (0, a.jsx)(w.m.ul, {
          className: ""
            .concat(T().list, " ")
            .concat(T()[t], " ")
            .concat(T()[o]),
          ref: l,
          variants: {
            hidden: {
              opacity: 1,
              transition: { delayChildren: 0.25, staggerChildren: 0.025 },
            },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.025, staggerChildren: 0.1 },
            },
          },
          initial: "hidden",
          animate: r,
          whileHover: "hover",
          children: n.map(function (e) {
            var n = e.key,
              t = e.name,
              i = e.type;
            return (0,
            a.jsxs)(w.m.li, { className: "".concat(T().item, " ").concat(n), variants: h, children: [(0, a.jsx)(L, { iconKey: n, iconType: i, color: s }), (0, a.jsx)("span", { className: T().title, children: t })] }, t);
          }),
        });
      }
      function L(e) {
        var n = e.iconKey,
          t = e.iconType,
          i = "colored";
        switch ((!1 === e.color && (i = ""), t)) {
          case "far":
          case "fad":
          case "fat":
          case "fas":
            return (0, a.jsx)(l.Z, { icon: [t, n] });
          case "devicon":
            return (0, a.jsx)("i", {
              className: "devicon-".concat(n, "-plain ").concat(i),
            });
          default:
            return "";
        }
      }
      function B(e) {
        var n = e.title,
          t = e.copy,
          i = e.list,
          s = e.fullContainer,
          o = e.block,
          r = e.icon,
          c = e.invertedColor,
          d = e.headerIcon,
          h = e.containerClass;
        return (0, a.jsxs)("div", {
          className: "".concat(T().badgeBlockContainer, " ").concat(h),
          children: [
            (0, a.jsx)("span", {
              className: d,
              children: (0, a.jsx)(l.Z, { icon: ["fat", r] }),
            }),
            (0, a.jsx)("h3", { children: n }),
            (0, a.jsx)(H, { copy: t }),
            (0, a.jsx)(P, {
              list: i,
              block: o,
              invertedColor: c,
              fullContainer: s,
            }),
          ],
        });
      }
      function H(e) {
        var n = e.copy;
        if (n) return (0, a.jsx)("p", { children: n });
      }
      function X(e) {
        var n = e.containerClass,
          t = e.iconClass,
          i = e.icon,
          s = e.title,
          o = e.copy;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: n,
            children: [
              (0, a.jsx)("span", {
                className: t,
                children: (0, a.jsx)(l.Z, { icon: i }),
              }),
              (0, a.jsx)("h3", { children: s }),
              (0, a.jsx)("p", { children: o }),
            ],
          }),
        });
      }
      var O = t(518),
        G = t.n(O);
      function A() {
        return (0, a.jsx)(o.Z, {
          classProp: G().section,
          children: (0, a.jsxs)(r.Z, {
            spacing: ["verticalXXXLrg"],
            children: [
              (0, a.jsx)(x, {
                title: "About Me",
                preTitle: "Synopsis",
                subTitle:
                  "An AI Engineer specializing in computer vision, NLP, and machine learning. With a BS in Computer Science and experience leading tech initiatives, I excel in developing advanced AI solutions and innovative software. I’m driven by tackling new challenges and leveraging technology to make a meaningful impact.",
              }),
              (0, a.jsxs)("section", {
                className: G().content,
                children: [
                  (0, a.jsx)("div", {
                    className: G().image,
                    children: (0, a.jsx)("img", {
                      src: "/img/pp.jpg",
                      alt: "my photo photo",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: G().copy,
                    children: [
                      (0, a.jsx)(X, {
                        title: "Softskills that pay the bills",
                        containerClass: G().container,
                        iconClass: G().icon,
                        icon: ["fat", "ear-listen"],
                        copy: "In addition to my design and technical expertise\u2014I also have strong leadership, time management, and multitasking skills\u2014. I am confident in my ability to bring passion and value to any project.",
                      }),
                      (0, a.jsx)(B, {
                        title: "Research and Development",
                        containerClass: G().container,
                        list: D,
                        fullContainer: "fullContainer",
                        block: "methods",
                        icon: "fingerprint",
                        copy: "Research and Development (R&D) is crucial in AI as it drives innovation and breakthroughs, allowing us to push the boundaries of technology. I’m passionate about R&D because it fuels creativity, solves complex problems, and continuously advances AI to address real-world challenges.",
                        headerIcon: "".concat(G().icon),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var D = [
        { key: "planet-moon", name: "User Research", type: "fad" },
        { key: "qrcode", name: "Digital Strategy", type: "fad" },
        { key: "window", name: "Design Systems", type: "fad" },
        { key: "cubes", name: "Product Strategy", type: "far" },
        { key: "layer-plus", name: "Brand Strategy", type: "fad" },
        { key: "solar-system", name: "Operations", type: "fad" },
      ];
      function M() {
        return (0, a.jsx)(o.Z, {
          classProp: "".concat(G().section, " borderBottom"),
          children: (0, a.jsxs)(r.Z, {
            spacing: ["verticalXXXLrg"],
            children: [
              (0, a.jsx)(x, {
                title: "Technical",
                preTitle: "Hardskills",
                subTitle:
                  "As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages.",
              }),
              (0, a.jsxs)("section", {
                className: "".concat(G().content, " ").concat(G().container),
                children: [
                  (0, a.jsxs)("div", {
                    className: G().copy,
                    children: [
                      (0, a.jsx)(X, {
                        title: "Polymath foundations",
                        icon: ["fat", "chart-network"],
                        copy: "With a strong foundation in both design and development, I bring a unique perspective to every project and am constantly learning and evolving to stay up-to-date with the latest industry trends.",
                        iconClass: G().icon,
                        containerClass: G().container,
                      }),
                      (0, a.jsx)(B, {
                        title: "Software I love to work with",
                        copy: "Experienced creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time.",
                        list: Z,
                        block: "software",
                        fullContainer: "fullContainer",
                        icon: "grid-2-plus",
                        containerClass: G().container,
                        headerIcon: G().icon,
                      }),
                      (0, a.jsx)(B, {
                        title: "Technologies I love to build with",
                        copy: "I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between.Even if it is new for me I can manage to learn it proactively over time with the best use of tools like chatGPT and google. No project is too challenging for me.",
                        list: E,
                        block: "tech",
                        fullContainer: "fullContainer",
                        icon: "laptop-code",
                        containerClass: G().container,
                        headerIcon: G().icon,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: ""
                      .concat(G().image, " ")
                      .concat(G().technicalSvg),
                    children: (0, a.jsx)(h(), {
                      src: "img/strings.jpg",
                      width: 477,
                      height: 1111,
                      alt: "Data Strings 01 by Colorpong: https://ywft.us/2177b695b",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var Z = [
          { key: "canva", name: "Canva", type: "devicon" },
          { key: "xcode", name: "Xcode", type: "devicon" },
          { key: "figma", name: "Figma", type: "devicon" },
          { key: "vscode", name: "VSCode", type: "devicon" },
          { key: "mailbox", name: "Postman", type: "fas" },
          { key: "androidstudio", name: "Android Studio", type: "devicon" },
          { key: "trello", name: "Trello", type: "devicon" },
          { key: "wordpress", name: "Wordpress", type: "devicon" },
          { key: "google", name: "Google", type: "devicon" },
        ],
        E = [
          { key: "javascript", name: "JavaScript", type: "devicon" },
          { key: "nodejs", name: "NodeJS", type: "devicon" },
          { key: "react", name: "React", type: "devicon" },
          { key: "nextjs", name: "NextJS", type: "devicon" },
          { key: "python", name: "Python", type: "devicon" },
          { key: "react", name: "reactnative", type: "devicon" },
          { key: "nodejs", name: "Nodejs", type: "devicon" },
          { key: "html5", name: "HTML5", type: "devicon" },
          { key: "css3", name: "CSS3", type: "devicon" },
          { key: "sass", name: "SASS", type: "devicon" },
          { key: "git", name: "Git", type: "devicon" },
          { key: "mysql", name: "MySQL", type: "devicon" },
          { key: "mongodb", name: "MongoDB", type: "devicon" },
        ],
        F = t(5449),
        J = t.n(F);
      function K() {
        return (0, a.jsx)(o.Z, {
          classProp: "".concat(J().section, " borderBottom"),
          children: (0, a.jsxs)(r.Z, {
            spacing: ["verticalXXXLrg"],
            children: [
              (0, a.jsx)(x, {
                title: "Experience",
                preTitle: "Career",
                subTitle:
                  "I am an AI engineer, working on multiple AI and automation projects",
              }),
              (0, a.jsxs)("section", {
                className: J().area,
                children: [
                  (0, a.jsxs)("article", {
                    className: J().company,
                    children: [
                      (0, a.jsxs)("div", {
                        className: J().companyContent,
                        children: [
                          (0, a.jsxs)("span", {
                            className: J().companyHeader,
                            children: [
                              (0, a.jsx)("h3", { children: "Covalent" }),
                              (0, a.jsx)("h4", {
                                children: "AI engineer, Permanent Full-time",
                              }),
                              (0, a.jsx)("h4", {
                                children: "August 2023 - October 2024 ",
                              }),
                              (0, a.jsx)("h5", {
                                children: "",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("p", {
                            children: [
                              "Covalent is a Fintech company providing financial services and products to top banks of pakistan.",
                              " ",
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", { className: J().companyAlt }),
                    ],
                  }),
                  // (0, a.jsx)("article", {
                  //   className: J().companyPositions,
                  //   children: (0, a.jsxs)("div", {
                  //     className: J().position,
                  //     children: [
                  //       (0, a.jsxs)("div", {
                  //         className: J().positionContent,
                  //         children: [
                  //           (0, a.jsxs)("span", {
                  //             class: J().positionHeader,
                  //             children: [
                  //               (0, a.jsx)("h3", {
                  //                 children:
                  //                   "Junior Mobile Developer & Technical Program Manager",
                  //               }),
                  //               (0, a.jsx)("h4", {
                  //                 children: "Oct 2022 - Present ",
                  //               }),
                  //             ],
                  //           }),
                  //           (0, a.jsxs)("p", {
                  //             children: [
                  //               "As a junior React Native developer and technical program manager, I am a versatile professional who excels in bridging the gap between design and code. My skills encompass translating Figma designs into functional UI/UX, crafting front-end screens, integrating APIs, and optimizing code. I actively engage in gathering client requirements, identifying pain points, enhancing user experiences, and creating technical documentation. During development, I breathe life into designs, manage databases, and contribute to research and tool selection. I also act as a client liaison, seamlessly incorporating feedback, manage cross-functional teams, facilitate testing, and ensure successful product releases. My ability to single-handedly manage support and maintenance demonstrates my all-encompassing approach to project management and development.",
                  //               " ",
                  //             ],
                  //           }),
                  //           (0, a.jsx)("p", {
                  //             children:
                  //               "Some vital skills learnt during this time \ud83d\udc47",
                  //           }),
                  //           (0, a.jsxs)("ul", {
                  //             className: J().list,
                  //             children: [
                  //               (0, a.jsxs)("li", {
                  //                 children: [
                  //                   "technical project management",
                  //                   (0, a.jsxs)("span", {
                  //                     className: J().subList,
                  //                     children: [
                  //                       (0, a.jsx)("span", {
                  //                         className: J().bullet,
                  //                       }),
                  //                       "Technical documentation ( software architecture diagram , erd, uml, product backlog etc)",
                  //                     ],
                  //                   }),
                  //                 ],
                  //               }),
                  //               (0, a.jsxs)("li", {
                  //                 children: [
                  //                   "end to end project execution with team",
                  //                   (0, a.jsxs)("span", {
                  //                     className: J().subList,
                  //                     children: [
                  //                       (0, a.jsx)("span", {
                  //                         className: J().bullet,
                  //                       }),
                  //                       "presales - discovery - design - development - testing - deployment - marketing",
                  //                     ],
                  //                   }),
                  //                 ],
                  //               }),
                  //               (0, a.jsxs)("li", {
                  //                 children: [
                  //                   "client retention and upsale",
                  //                   " ",
                  //                   (0, a.jsxs)("span", {
                  //                     className: J().subList,
                  //                     children: [
                  //                       (0, a.jsx)("span", {
                  //                         className: J().bullet,
                  //                       }),
                  //                       "I boosted client retention, upsell, and profitability by transitioning two projects from development to support and maintenance.",
                  //                     ],
                  //                   }),
                  //                 ],
                  //               }),
                  //               (0, a.jsxs)("li", {
                  //                 children: [
                  //                   "Going on client calls and demonstrating work to the client",
                  //                   (0, a.jsxs)("span", {
                  //                     className: J().subList,
                  //                     children: [
                  //                       (0, a.jsx)("span", {
                  //                         className: J().bullet,
                  //                       }),
                  //                       "I actively engage in client meetings and presentations to showcase project progress and gather valuable feedback.",
                  //                     ],
                  //                   }),
                  //                 ],
                  //               }),
                  //             ],
                  //           }),
                  //           (0, a.jsx)(P, {
                  //             list: R,
                  //             block: "stack",
                  //             fullContainer: "fullContainer",
                  //           }),
                  //         ],
                  //       }),
                  //       (0, a.jsx)("div", { className: J().positionAlt }),
                  //     ],
                  //   }),
                  // }),
                  (0, a.jsxs)("article", {
                    className: J().company,
                    children: [
                      (0, a.jsxs)("div", {
                        className: J().companyContent,
                        children: [
                          (0, a.jsxs)("span", {
                            className: J().companyHeader,
                            children: [
                              (0, a.jsx)("h3", { children: "Shispare" }),
                              (0, a.jsx)("h4", {
                                children: "Associate AI Engineer",
                              }),
                              // (0, a.jsx)("h4", {
                              //   children: "September 2022 - June 2023",
                              // }),
                              (0, a.jsx)("h5", {
                                children: "",
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "At Shispare, I developed a custom chatbot integrated with MySQL, allowing users to access real-time inventory and warehouse information..",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", { className: J().companyAlt }),
                    ],
                  }),
                  (0, a.jsxs)("article", {
                    className: J().company,
                    children: [
                      (0, a.jsxs)("div", {
                        className: J().companyContent,
                        children: [
                          (0, a.jsxs)("span", {
                            className: J().companyHeader,
                            children: [
                              (0, a.jsx)("h3", {
                                children: "Daraz",
                              }),
                              (0, a.jsx)("h4", {
                                children: "Technology trainee",
                              }),
                              (0, a.jsx)("h5", {
                                children: "",
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "Daraz, Pakistan's top e-commerce store, provided me with training in Java and the Spring Boot framework.",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", { className: J().companyAlt }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var R = [
          { key: "javascript", name: "JavaScript", type: "devicon" },
          { key: "nodejs", name: "NodeJS", type: "devicon" },
          { key: "react", name: "React", type: "devicon" },
          { key: "nextjs", name: "NextJS", type: "devicon" },
          { key: "php", name: "PHP", type: "devicon" },
          { key: "wordpress", name: "WordPress", type: "devicon" },
          { key: "woocommerce", name: "WooCommerce", type: "devicon" },
          { key: "html5", name: "HTML5", type: "devicon" },
          { key: "css3", name: "CSS3", type: "devicon" },
          { key: "sass", name: "SASS", type: "devicon" },
          { key: "git", name: "Git", type: "devicon" },
          { key: "mysql", name: "MySQL", type: "devicon" },
          { key: "mongodb", name: "MongoDB", type: "devicon" },
        ],
        W = t(9783),
        q = t.n(W),
        z = JSON.parse(
          '[{"project":"Warehouse chatbot","url":"https://www.figma.com/file/D1boPHeYhhXRZnUBvIocoX/Sayyo?type=design&node-id=1%3A6161&mode=design&t=bDm2HuK1GMipNldh-1","repo":"Private","descriptionTitle":" Custom LLM chabot \ud83d\udd17","description":"A chatbot connected to a MySQL DB, providing users with the latest warehouse info.","imageOptions":[],"images":[{"key":"mock-stack","hover":"right","h":"600","w":"278","url":"/img/msc-mock_stack/bot.png"},{"key":"mock-stack","hover":"right","h":"500","w":"478","url":"/img/msc-mock_stack/bot.png"}],"stack":[{"key":"mysql","name":"mySQL","type":"devicon"},{"key":"javascript","name":"JavaScript","type":"devicon"},{"key":"jquery","name":"jQuery","type":"devicon"},{"key":"html5","name":"HTML5","type":"devicon"},{"key":"css3","name":"CSS3","type":"devicon"},{"key":"python","name":"PYTHON","type":"devicon"},{"key":"git","name":"Git(Hub)","type":"devicon"},{"key":"Llama","name":"LLAMA3","type":"devicon"}]},{"project":"ID card verification","repo":"Private","descriptionTitle":"For ID Documents: ","description":"Uses computer vision to extract and verify data from national ID cards.","imageOptions":[{"key":"size","value":"medium"}],"images":[{"key":"portfolio","hover":"left","h":"797","w":"456","url":"/img/idcard.jpg"}],"stack":[{"key":"react","name":"React","type":"devicon"},{"key":"nodejs","name":"Node.js","type":"devicon"},{"key":"mysql","name":"Mysql","type":"devicon"},{"key":"javascript","name":"JavaScript","type":"devicon"},{"key":"PYTHON","name":"PYTHON","type":"devicon"},{"key":"YOLO","name":"YoloV8","type":"devicon"},{"key":"git","name":"Git(Hub)","type":"devicon"}]}]'
        );
      function Q(e, n) {
        var t = e.content,
          s = t.project,
          o = (t.url, t.repo),
          r = t.descriptionTitle,
          c = t.description,
          d = t.stack,
          m = (t.imageOptions, t.images),
          p = (0, C._)(),
          g = (0, S.YD)({ threshold: 0.25, triggerOnce: !1 }),
          y = g.ref,
          u = g.inView;
        return (
          (0, i.useEffect)(
            function () {
              u && p.start("visible"), u || p.start("hidden");
            },
            [p, u]
          ),
          (0, a.jsxs)(
            w.m.section,
            {
              className: q().project,
              ref: y,
              variants: U,
              initial: ["rest", "hidden"],
              whileHover: "hover",
              animate: p,
              children: [
                (0, a.jsx)("div", {
                  className: q().details,
                  children: (0, a.jsxs)("div", {
                    className: q().projectHeader,
                    children: [
                      (0, a.jsxs)("div", {
                        className: q().header,
                        children: [
                          (0, a.jsx)("h3", {
                            className: "highlight",
                            children: s,
                          }),
                          (0, a.jsxs)("span", {
                            className: q().privateOr,
                            children: [
                              (0, a.jsx)("i", {
                                className: "devicon-github-plain",
                              }),
                              o,
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: q().description,
                        children: (0, a.jsxs)("p", {
                          children: [
                            (0, a.jsx)("strong", { children: r }),
                            " ",
                            c,
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: q().stackContainer,
                        children: (0, a.jsx)(P, {
                          list: d,
                          block: "stack",
                          fullContainer: !1,
                          color: !1,
                        }),
                      }),
                      (0, a.jsx)(w.m.div, {
                        variants: "",
                        className: q().viewProject,
                        children: (0, a.jsx)(l.Z, {
                          icon: ["fad", "arrow-right-to-bracket"],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: q().imageContainer,
                  children: (0, a.jsx)("span", {
                    className: "".concat(q().imageAnimationContainer),
                    children: m.map(function (e, n) {
                      var t = e.key,
                        i = e.url,
                        s = e.hover,
                        o = e.h,
                        r = e.w;
                      return (
                        (s = "left" === s ? Y : $),
                        (0, a.jsx)(
                          w.m.div,
                          {
                            variants: V,
                            children: (0, a.jsx)(w.m.div, {
                              variants: s,
                              children: (0, a.jsx)(h(), {
                                src: i,
                                alt: "x",
                                height: o,
                                width: r,
                              }),
                            }),
                          },
                          "".concat(n, "-").concat(t)
                        )
                      );
                    }),
                  }),
                }),
              ],
            },
            n
          )
        );
      }
      var U = {
          hidden: {
            transition: { delayChildren: 0.125, staggerChildren: 0.0625 },
          },
          visible: {
            transition: { delayChildren: 0.125, staggerChildren: 0.25 },
          },
          rest: { transition: { delayChildren: 0, staggerChildren: 0 } },
          hover: { transition: { delayChildren: 0, staggerChildren: 0 } },
        },
        V = {
          hidden: {
            y: 75,
            opacity: 0,
            transition: { type: "tween", ease: "easeIn", duration: 0.35 },
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: { type: "tween", ease: "easeOut", duration: 0.5 },
          },
        },
        Y = { rest: { x: 0 }, hover: { x: -20 } },
        $ = { rest: { x: 0 }, hover: { x: 20 } };
      function ee() {
        return (0, a.jsxs)(o.Z, {
          classProp: q().hasBg,
          children: [
            (0, a.jsxs)(r.Z, {
              spacing: "verticalXXXXLrg",
              children: [
                (0, a.jsx)(x, {
                  title: "Featured Projects",
                  // preTitle: "UX and Full Stack",
                  subTitle:
                    "Focused on the experience, driven by the engineering.",
                }),
                "     ",
                z.map(function (e, n) {
                  return (0, a.jsx)(Q, { content: e, index: n }, n);
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: q().bgContainer,
              children: [
                (0, a.jsxs)("span", {
                  className: q().orbitalBg,
                  children: [
                    (0, a.jsx)("span", {
                      class: "".concat(q().bgSection),
                      children: (0, a.jsx)("span", {
                        className: ""
                          .concat(q().bgInner, " ")
                          .concat(q().heroLeft, " ")
                          .concat(q().heroOrbital),
                      }),
                    }),
                    (0, a.jsx)("span", {
                      class: "".concat(q().bgSection),
                      children: (0, a.jsx)("span", {
                        className: ""
                          .concat(q().bgInner, " ")
                          .concat(q().heroCenter),
                      }),
                    }),
                    (0, a.jsx)("span", {
                      class: "".concat(q().bgSection),
                      children: (0, a.jsx)("span", {
                        className: ""
                          .concat(q().bgInner, " ")
                          .concat(q().heroRight, " ")
                          .concat(q().heroOrbital),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("span", { className: q().afterGlowBg }),
              ],
            }),
          ],
        });
      }
      var ne = t(3653),
        te = JSON.parse(
          '{"dark":{"mesh__primaryDark":"#05070a","mesh__primaryLight":"#07130f","mesh__secondaryDark":"#080608","mesh__secondaryLight":"#090408"},"light":{},"unicorn":{}}'
        );
      function ae() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(ne.Z, { colors: te }),
            (0, a.jsx)(v, {}),
            (0, a.jsx)(N, {}),
            (0, a.jsx)(ee, {}),
            (0, a.jsx)(A, {}),
            (0, a.jsx)(M, {}),
            (0, a.jsx)(K, {}),
          ],
        });
      }
    },
    5882: function (e) {
      e.exports = {
        badgeBlockContainer: "badges_badgeBlockContainer__kevdK",
        list: "badges_list__7K6_N",
        item: "badges_item__4z4QX",
        colored: "badges_colored__v7OXl",
        title: "badges_title__2xfcM",
        methods: "badges_methods__tBEpE",
        invertedColor: "badges_invertedColor__VgL9E",
        fullContainer: "badges_fullContainer__IxLYL",
      };
    },
    504: function (e) {
      e.exports = {
        primary: "button_primary__bzL3_",
        secondary: "button_secondary__v9Tcf",
      };
    },
    82: function (e) {
      e.exports = { title: "section_title_title__vFiXQ" };
    },
    518: function (e) {
      e.exports = {
        section: "about_section__Qoa01",
        content: "about_content__RzwJH",
        container: "about_container__6NFiN",
        copy: "about_copy__XEObN",
        icon: "about_icon__HUfPT",
        image: "about_image__hW1fB",
        technicalSvg: "about_technicalSvg__abk09",
      };
    },
    5449: function (e) {
      e.exports = {
        section: "career_section__bDN7M",
        area: "career_area__YLjEb",
        company: "career_company__G_Isc",
        position: "career_position__MDcKh",
        companyContent: "career_companyContent__d3whS",
        companyPositions: "career_companyPositions__7_kuG",
        first: "career_first___jbuk",
        content: "career_content__Uf6jO",
        positionContent: "career_positionContent__JA7KM",
        list: "career_list__b3A38",
        subList: "career_subList__LZtGG",
        bullet: "career_bullet__qdcXG",
        technicalSvg: "career_technicalSvg__W4gR7",
      };
    },
    1179: function (e) {
      e.exports = {
        section: "hero_section__uxPFI",
        container: "hero_container__axwcG",
        preHeader: "hero_preHeader__d7At9",
        header: "hero_header__NG13s",
        primaryDim: "hero_primaryDim__R8r9T",
        primaryBright: "hero_primaryBright__zh5rT",
        tempBright: "hero_tempBright__aDCjE",
        gitBadges: "hero_gitBadges__lbD96",
        colorfulV1: "hero_colorfulV1__jEWzR",
        svg_background: "hero_svg_background__BQsrK",
        radialContainer: "hero_radialContainer__mQpvT",
        radialGradient: "hero_radialGradient__Zc_Iu",
        barContainer: "hero_barContainer__WgGNh",
        barGradient: "hero_barGradient__jKMAI",
      };
    },
    769: function (e) {
      e.exports = {
        section: "looking_section__WKDqm",
        container: "looking_container__Big60",
        copy: "looking_copy__Qf6Ju",
        jsonSub: "looking_jsonSub__s2CQO",
        preHeader: "looking_preHeader__vV2Kn",
        header: "looking_header__MCTAZ",
        subHeader: "looking_subHeader__hB8Ru",
        highlight: "looking_highlight__P8knE",
        highlight2: "looking_highlight2__mKUcA",
      };
    },
    9783: function (e) {
      e.exports = {
        hasBg: "featured_hasBg__MnnLx",
        project: "featured_project__alfJt",
        viewProject: "featured_viewProject__LRCDl",
        projectHeader: "featured_projectHeader__DHjCt",
        header: "featured_header__NiZK4",
        privateOr: "featured_privateOr__xOazf",
        details: "featured_details__Vb5IC",
        imageContainer: "featured_imageContainer__T6aeo",
        imageAnimationContainer: "featured_imageAnimationContainer__bfdEh",
        bgContainer: "featured_bgContainer__8IxY8",
        afterGlowBg: "featured_afterGlowBg__hXlZJ",
        orbitalBg: "featured_orbitalBg__3gyim",
        rotationFore: "featured_rotationFore__NXBAx",
        bgSection: "featured_bgSection__PzIR2",
        bgInner: "featured_bgInner__2Y3Ln",
        heroOrbital: "featured_heroOrbital__XSsO8",
        heroLeft: "featured_heroLeft__uecXJ",
        heroCenter: "featured_heroCenter__ygpHP",
        heroRight: "featured_heroRight__CzHQf",
        stackContainer: "featured_stackContainer__x1ueX",
      };
    },
    602: function (e) {
      e.exports = { colors: "page_colors_colors__VUWMb" };
    },
  },
  function (e) {
    e.O(0, [226, 774, 888, 179], function () {
      return (n = 5728), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
