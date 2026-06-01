export type Difficulty = {
  id: number;
  title: string;
  subtitle: string;
  gridSize: number;
  scrambleMoves: number;
  starTimes: {
    three: number;
    two: number;
  };
};

export type PhilosopherStage = {
  id: string;
  order: number;
  levelId: number;
  name: string;
  era: string;
  origin: string;
  image: string;
  idea: string;
  story: {
    summary: string;
    chapters: {
      title: string;
      body: string;
    }[];
    works: string[];
    sourceUrl: string;
  };
};

export const difficulties: Difficulty[] = [
  {
    id: 1,
    title: "Khai mở",
    subtitle: "Bắt đầu từ những câu hỏi",
    gridSize: 3,
    scrambleMoves: 16,
    starTimes: { three: 40, two: 95 },
  },
  {
    id: 2,
    title: "Tĩnh lặng",
    subtitle: "Rèn luyện nội tâm",
    gridSize: 3,
    scrambleMoves: 42,
    starTimes: { three: 52, two: 115 },
  },
  {
    id: 3,
    title: "Lý trí",
    subtitle: "Xây lại nền tảng nhận thức",
    gridSize: 4,
    scrambleMoves: 72,
    starTimes: { three: 100, two: 195 },
  },
  {
    id: 4,
    title: "Biện chứng",
    subtitle: "Xã hội, tự do và lịch sử",
    gridSize: 4,
    scrambleMoves: 126,
    starTimes: { three: 135, two: 260 },
  },
  {
    id: 5,
    title: "Hiện sinh",
    subtitle: "Con người tự kiến tạo ý nghĩa",
    gridSize: 5,
    scrambleMoves: 208,
    starTimes: { three: 220, two: 410 },
  },
];

export const stages: PhilosopherStage[] = [
  {
    id: "socrates",
    order: 1,
    levelId: 1,
    name: "Socrates",
    era: "469-399 TCN",
    origin: "Athens, Hy Lạp",
    image: "/portraits/socrates.webp",
    idea: "Minh triết bắt đầu khi ta nghiêm túc xem xét điều mình tưởng là đã biết.",
    story: {
      summary:
        "Socrates không để lại tác phẩm viết nào. Câu chuyện về ông đến từ những người khác, đặc biệt là Plato, Xenophon và Aristophanes, nên chân dung lịch sử luôn cần được đọc với sự thận trọng.",
      chapters: [
        {
          title: "Một triết gia giữa quảng trường",
          body:
            "Socrates thường trò chuyện với người dân Athens ở những nơi công cộng. Thay vì giảng một học thuyết đóng kín, ông đặt câu hỏi về lòng can đảm, sự công bằng, đức hạnh và cách sống. Những cuộc đối thoại ấy buộc người tham gia nhận ra khoảng cách giữa điều họ tin chắc và điều họ thực sự có thể giải thích.",
        },
        {
          title: "Phiên tòa năm 399 TCN",
          body:
            "Ông bị đưa ra xét xử với các cáo buộc bất kính đối với thần linh của thành bang và làm hư hỏng thanh niên. Socrates bị kết án tử hình. Phiên tòa và cái chết của ông được biết đến qua các nguồn cổ, nổi bật là các tác phẩm của Plato và Xenophon, và đã trở thành một hình ảnh có sức ảnh hưởng đặc biệt trong lịch sử triết học.",
        },
        {
          title: "Di sản của một người không viết sách",
          body:
            "Điều còn lại không phải là một bộ giáo trình do Socrates soạn ra, mà là một mẫu hình: sống bằng việc tự kiểm tra niềm tin của mình và không ngại những câu hỏi khó. Vì các nguồn kể khác nhau, ta không nên đồng nhất hoàn toàn Socrates lịch sử với nhân vật Socrates trong bất kỳ một tác phẩm riêng lẻ nào.",
        },
      ],
      works: [
        "Socrates không để lại tác phẩm viết",
        "Nguồn cổ quan trọng: Biện hộ Socrates của Plato",
        "Nguồn cổ quan trọng: Hồi ức về Socrates của Xenophon",
      ],
      sourceUrl: "https://plato.stanford.edu/entries/socrates/",
    },
  },
  {
    id: "confucius",
    order: 2,
    levelId: 1,
    name: "Khổng Tử",
    era: "theo truyền thống: 551-479 TCN",
    origin: "Nước Lỗ, Trung Hoa",
    image: "/portraits/confucius.webp",
    idea: "Đạo đức bắt đầu từ việc tu sửa mình và đối xử có lễ với người khác.",
    story: {
      summary:
        "Khổng Tử sống vào cuối thời Xuân Thu và trở thành một trong những nhân vật có ảnh hưởng sâu rộng nhất trong lịch sử tư tưởng Đông Á. Tuy vậy, các văn bản cổ phản ánh nhiều lớp truyền thừa, nên cần phân biệt con người lịch sử với những diễn giải được hình thành về sau.",
      chapters: [
        {
          title: "Học để sửa mình",
          body:
            "Trong các lời dạy được lưu truyền, Khổng Tử đặt trọng tâm vào việc rèn luyện phẩm chất, thực hành lễ và học hỏi không ngừng. Đạo đức không chỉ là ý niệm trừu tượng: nó thể hiện trong cách một người đối xử với gia đình, cộng đồng và trách nhiệm của mình.",
        },
        {
          title: "Một lý tưởng chính trị từ giáo dục",
          body:
            "Khổng Tử được các nguồn cổ mô tả như một người thầy, cố vấn và nhà cải cách. Ông gắn việc trị quốc với phẩm hạnh của người cầm quyền: trật tự xã hội bền vững không thể chỉ dựa vào hình phạt, mà còn cần nêu gương, giáo dục và nghi lễ.",
        },
        {
          title: "Luận Ngữ và nhiều thế kỷ diễn giải",
          body:
            "Luận Ngữ bảo tồn các đối thoại và lời dạy gắn với Khổng Tử, nhưng không phải là cuốn sách do chính ông tự tay viết theo nghĩa hiện đại. Qua nhiều triều đại, hình ảnh Khổng Tử tiếp tục được diễn giải trong giáo dục, chính trị và văn hóa, tạo nên một truyền thống đa dạng hơn bất kỳ công thức đơn giản nào.",
        },
      ],
      works: [
        "Luận Ngữ: tập hợp lời dạy và đối thoại được truyền lại",
        "Các kinh điển và chú giải về sau cần được phân biệt với lời dạy sớm nhất",
      ],
      sourceUrl: "https://plato.stanford.edu/entries/confucius/",
    },
  },
  {
    id: "plato",
    order: 3,
    levelId: 1,
    name: "Plato",
    era: "429?-347 TCN",
    origin: "Athens, Hy Lạp",
    image: "/portraits/plato.webp",
    idea: "Điều ta thấy chỉ là một phần của hành trình hướng tới chân lý.",
    story: {
      summary:
        "Plato là một công dân Athens, nhà văn và triết gia có ảnh hưởng nền tảng đối với truyền thống phương Tây. Thay vì viết giáo trình khô cứng, ông thường xây dựng các cuộc đối thoại, nơi câu hỏi tiếp tục sống ngay cả khi người đọc đã khép trang sách.",
      chapters: [
        {
          title: "Viết triết học bằng đối thoại",
          body:
            "Socrates xuất hiện như nhân vật trung tâm trong phần lớn các đối thoại của Plato. Qua những cuộc tranh luận về công lý, tri thức, tình yêu, giáo dục và đời sống tốt đẹp, Plato khiến người đọc không chỉ tiếp nhận kết luận mà còn phải theo dõi cách một lập luận được hình thành và bị thử thách.",
        },
        {
          title: "Từ điều nhìn thấy đến điều có thể hiểu",
          body:
            "Plato thường được gắn với học thuyết về các Hình thức hay Ý niệm: những sự vật cảm nhận được không phải là toàn bộ thực tại và việc hiểu biết đòi hỏi ta vượt qua bề mặt thay đổi của thế giới. Ẩn dụ hang động trong Cộng hòa là một hình ảnh nổi tiếng cho hành trình giáo dục ấy.",
        },
        {
          title: "Ảnh hưởng kéo dài qua nhiều thời đại",
          body:
            "Plato thành lập Academy tại Athens. Từ triết học chính trị đến siêu hình học và nhận thức luận, tác phẩm của ông tiếp tục được đọc, tranh luận và diễn giải lại trong gần như mọi giai đoạn lớn của lịch sử triết học phương Tây.",
        },
      ],
      works: ["Cộng hòa", "Biện hộ Socrates", "Yến hội", "Phaedo"],
      sourceUrl: "https://plato.stanford.edu/entries/plato/",
    },
  },
  {
    id: "aristotle",
    order: 4,
    levelId: 2,
    name: "Aristotle",
    era: "384-322 TCN",
    origin: "Stagira, Hy Lạp",
    image: "/portraits/aristotle.webp",
    idea: "Đức hạnh là thói quen lựa chọn mức độ đúng đắn giữa hai cực.",
    story: {
      summary:
        "Aristotle sinh tại Stagira năm 384 TCN và đến Athens học tại Academy khi khoảng mười bảy tuổi. Phạm vi nghiên cứu của ông rộng hiếm thấy: từ logic, đạo đức và chính trị đến sinh học, thi ca và bản chất của sự vật.",
      chapters: [
        {
          title: "Từ Academy đến những quan sát ngoài thực địa",
          body:
            "Aristotle gắn bó với Academy cho đến khi Plato qua đời năm 347 TCN. Sau đó ông rời Athens, sống tại Assos rồi Lesbos, nơi ông tiếp tục nghiên cứu triết học và khảo sát sinh học. Những năm này cho thấy một đặc điểm bền vững trong tư duy Aristotle: lý thuyết cần được thử sức với thế giới cụ thể.",
        },
        {
          title: "Người thầy của Alexander",
          body:
            "Năm 343 TCN, theo lời mời của vua Philip xứ Macedonia, Aristotle đến Pella để dạy Alexander khi cậu khoảng mười ba tuổi. Các sử gia vẫn thận trọng về mức độ ảnh hưởng cụ thể của Aristotle đối với vị vua tương lai; điều chắc chắn là giai đoạn dạy học này đã diễn ra.",
        },
        {
          title: "Lyceum và một kho câu hỏi rộng lớn",
          body:
            "Khi trở lại Athens, Aristotle lập trường Lyceum. Ông hệ thống hóa nhiều lĩnh vực nghiên cứu và để lại dấu ấn lâu dài trong cách con người phân tích lập luận, nguyên nhân, đức hạnh, đời sống chính trị và thế giới tự nhiên.",
        },
      ],
      works: ["Đạo đức học Nicomachus", "Chính trị học", "Siêu hình học", "Thi học"],
      sourceUrl: "https://plato.stanford.edu/entries/aristotle/",
    },
  },
  {
    id: "epicurus",
    order: 5,
    levelId: 2,
    name: "Epicurus",
    era: "341-270 TCN",
    origin: "Samos và Athens, Hy Lạp",
    image: "/portraits/epicurus.webp",
    idea: "Hạnh phúc bền vững đến từ sự thanh thản, tình bạn và nhu cầu giản dị.",
    story: {
      summary:
        "Epicurus xây dựng một hệ thống triết học hướng tới hạnh phúc thông qua việc giảm đau đớn thể xác và xáo động tinh thần. Ông thường bị hiểu nhầm như người cổ vũ hưởng thụ vô độ, trong khi lý tưởng của ông gần với một đời sống tỉnh táo, giản dị và có tình bạn.",
      chapters: [
        {
          title: "Hành trình trở lại Athens",
          body:
            "Epicurus sinh năm 341 TCN và lớn lên tại Samos. Sau những giai đoạn học tập và giảng dạy ở nhiều nơi, ông trở lại Athens vào khoảng năm 307 hoặc 306 TCN. Tại đây, ông mua khu đất trở thành Khu vườn, tên gọi gắn liền với trường phái của mình.",
        },
        {
          title: "Khoái lạc không đồng nghĩa với xa hoa",
          body:
            "Với Epicurus, mục tiêu không phải là chạy theo mọi ham muốn. Ông nhấn mạnh sự vắng mặt của đau đớn và bất an, đồng thời xem tình bạn là thiết yếu. Việc hiểu tự nhiên cũng giúp con người bớt sợ hãi trước thần linh và sự trừng phạt sau cái chết.",
        },
        {
          title: "Một hệ thống gắn kết",
          body:
            "Đạo đức học của Epicurus liên kết chặt với quan niệm duy vật về tự nhiên và lý thuyết nhận thức của ông. Những bức thư và mệnh đề ngắn còn lưu lại cho thấy triết học được thiết kế để ghi nhớ, thực hành và giúp con người sống thanh thản hơn.",
        },
      ],
      works: [
        "Thư gửi Menoeceus",
        "Thư gửi Herodotus",
        "Các giáo lý chủ yếu",
        "Về tự nhiên: chỉ còn lại một phần",
      ],
      sourceUrl: "https://plato.stanford.edu/entries/epicurus/",
    },
  },
  {
    id: "seneca",
    order: 6,
    levelId: 2,
    name: "Seneca",
    era: "khoảng 1 TCN-65",
    origin: "Corduba và Rome",
    image: "/portraits/seneca.webp",
    idea: "Ta không kiểm soát mọi biến cố, nhưng có thể rèn cách mình đáp lại chúng.",
    story: {
      summary:
        "Seneca là triết gia Khắc kỷ, nhà văn và chính khách La Mã. Đời ông không phải một câu chuyện đơn giản về sự bình thản: nó đi qua quyền lực, lưu đày, hiểm nguy và những mâu thuẫn mà chính người đọc vẫn phải tiếp tục cân nhắc.",
      chapters: [
        {
          title: "Từ Corduba đến chính trường Rome",
          body:
            "Lucius Annaeus Seneca sinh khoảng năm 1 TCN tại Corduba, thuộc Hispania, và được giáo dục về hùng biện cùng triết học tại Rome. Sự nghiệp chính trị của ông thành công nhưng đầy biến động, cho ông trải nghiệm trực tiếp về tham vọng, cảm xúc mãnh liệt và rủi ro quanh quyền lực.",
        },
        {
          title: "Lưu đày và triều đại Nero",
          body:
            "Năm 41, Seneca bị lưu đày đến Corsica. Sau khi trở lại, ông từng dạy Nero khi Nero còn trẻ và trở thành một trong các cố vấn sau khi Nero lên ngôi năm 54. Đến năm 65, Seneca bị buộc tội liên quan đến âm mưu Pisonian và bị ép tự sát.",
        },
        {
          title: "Triết học như một việc luyện tập",
          body:
            "Trong các thư và tiểu luận đạo đức, Seneca viết về cách sử dụng thời gian, xử lý giận dữ, đối diện mất mát và rèn luyện phán đoán. Văn phong gần gũi của ông mời người đọc nhìn vào đời sống của chính mình, nhưng không nên xem mọi lời trong sách là một bản tự truyện trực tiếp.",
        },
      ],
      works: ["Thư đạo đức gửi Lucilius", "Về sự ngắn ngủi của đời người", "Về giận dữ", "Khảo sát tự nhiên"],
      sourceUrl: "https://plato.stanford.edu/entries/seneca/",
    },
  },
  {
    id: "augustine",
    order: 7,
    levelId: 3,
    name: "Augustine",
    era: "354-430",
    origin: "Bắc Phi La Mã",
    image: "/portraits/augustine.webp",
    idea: "Hành trình tìm chân lý cũng là hành trình nhìn vào ký ức và khát vọng nội tâm.",
    story: {
      summary:
        "Augustine thành Hippo là một trong những nhà tư tưởng Kitô giáo có ảnh hưởng sâu rộng nhất thời cổ đại. Cuộc đời ông đi từ học tập hùng biện và nhiều năm theo Manichaeism đến cải đạo, chức giám mục và một khối tác phẩm đồ sộ về ký ức, ý chí, thời gian, ân sủng và lịch sử.",
      chapters: [
        {
          title: "Một trí óc tìm đường",
          body:
            "Augustine sinh năm 354 tại Thagaste ở Bắc Phi thuộc La Mã, nay thuộc Algeria. Ông học ngữ pháp và hùng biện tại Madauros và Carthage, rồi theo Manichaeism trong khoảng chín năm. Năm 383, ông chuyển đến Milan để giữ một vị trí giảng dạy hùng biện được trả lương công.",
        },
        {
          title: "Bước ngoặt ở Milan",
          body:
            "Tại Milan, Augustine chịu ảnh hưởng của giám mục Ambrose và những Kitô hữu có khuynh hướng Tân-Plato. Sau thời kỳ khủng hoảng nội tâm, ông cải đạo vào mùa hè năm 386, từ bỏ con đường sự nghiệp hùng biện và được Ambrose rửa tội vào lễ Phục sinh năm 387.",
        },
        {
          title: "Từ Tự thú đến Thành đô của Thiên Chúa",
          body:
            "Trở về Bắc Phi, Augustine sau này trở thành giám mục Hippo. Tự thú kết hợp hồi tưởng cá nhân với suy tư triết học và thần học; Thành đô của Thiên Chúa được viết trong bối cảnh thế giới La Mã rung chuyển. Những câu hỏi của ông về thời gian, tự do và cái ác tiếp tục định hình triết học Trung cổ và nhiều tranh luận về sau.",
        },
      ],
      works: ["Tự thú", "Thành đô của Thiên Chúa", "Về Ba Ngôi", "Về ý chí tự do"],
      sourceUrl: "https://plato.stanford.edu/entries/augustine/",
    },
  },
  {
    id: "descartes",
    order: 8,
    levelId: 3,
    name: "René Descartes",
    era: "1596-1650",
    origin: "Pháp và Hà Lan",
    image: "/portraits/descartes.webp",
    idea: "Hoài nghi có phương pháp mở ra một điểm tựa chắc chắn cho tri thức.",
    story: {
      summary:
        "René Descartes là nhà toán học, nhà tư tưởng về tự nhiên và nhà siêu hình học quan trọng của thế kỷ XVII. Ông không chỉ đặt ra phương pháp hoài nghi nổi tiếng mà còn góp phần tạo nên hình học giải tích và một cách nhìn mới về thế giới vật chất.",
      chapters: [
        {
          title: "Tìm một nền móng chắc chắn",
          body:
            "Descartes sử dụng hoài nghi như một phương pháp: tạm gác lại những điều có thể nghi ngờ để tìm điểm khởi đầu vững chắc cho tri thức. Từ việc nhận ra chính hoạt động tư duy không thể bị xóa bỏ ngay trong lúc nghi ngờ, ông xây dựng các lập luận mới về tâm trí, vật chất và Thượng đế.",
        },
        {
          title: "Toán học và tự nhiên học",
          body:
            "Trong toán học, Descartes phát triển các kỹ thuật mở đường cho hình học giải tích, giúp nối đại số với hình học. Trong nghiên cứu tự nhiên, ông công bố định luật khúc xạ dạng sin, giải thích cầu vồng và đề xuất một mô hình cơ giới về thế giới vật chất vận hành theo các quy luật phổ quát.",
        },
        {
          title: "Một bước ngoặt của triết học cận đại",
          body:
            "Sự phân biệt giữa tâm trí và vật chất trong hệ thống Descartes góp phần định hình bài toán tâm-thân hiện đại. Các tác phẩm của ông trở thành điểm xuất phát cho nhiều cuộc tranh luận lớn ở châu Âu thế kỷ XVII và XVIII.",
        },
      ],
      works: ["Luận về phương pháp", "Suy niệm về triết học thứ nhất", "Các nguyên lý triết học", "Những đam mê của linh hồn"],
      sourceUrl: "https://plato.stanford.edu/entries/descartes/",
    },
  },
  {
    id: "spinoza",
    order: 9,
    levelId: 3,
    name: "Baruch Spinoza",
    era: "1632-1677",
    origin: "Amsterdam, Hà Lan",
    image: "/portraits/spinoza.webp",
    idea: "Tự do lớn dần khi ta hiểu các nguyên nhân chi phối cảm xúc và hành động.",
    story: {
      summary:
        "Baruch Spinoza là một trong những nhà tư tưởng cấp tiến nhất thời cận đại. Từ một gia đình Do Thái gốc Bồ Đào Nha tại Amsterdam, ông đi tới một hệ thống triết học tự nhiên luận mạnh mẽ về Thượng đế, thế giới, cảm xúc và tự do.",
      chapters: [
        {
          title: "Amsterdam và lệnh khai trừ",
          body:
            "Spinoza sinh năm 1632 trong cộng đồng Do Thái Bồ Đào Nha ở Amsterdam. Khi mười bảy tuổi, ông phải dừng việc học chính thức để giúp kinh doanh gia đình. Ngày 27 tháng 7 năm 1656, cộng đồng ban lệnh herem khai trừ ông; nguyên nhân cụ thể không được biết hoàn toàn chắc chắn.",
        },
        {
          title: "Một hệ thống triết học táo bạo",
          body:
            "Spinoza bác bỏ quan niệm về một Thượng đế siêu việt và quan phòng theo cách truyền thống, đồng thời phát triển một triết học thường được tóm tắt bằng cụm từ Thượng đế hay Tự nhiên. Đạo đức học của ông được trình bày theo lối hình học, với định nghĩa, mệnh đề và chứng minh.",
        },
        {
          title: "Từ cảm xúc bị động đến hiểu biết",
          body:
            "Spinoza không hứa rằng con người có thể đứng ngoài trật tự tự nhiên. Ông tìm tự do trong việc hiểu rõ hơn các nguyên nhân chi phối cảm xúc và hành động. Chính sự hiểu biết ấy mở ra một đời sống bớt lệ thuộc vào những đam mê bị động.",
        },
      ],
      works: ["Đạo đức học", "Luận văn thần học-chính trị", "Các nguyên lý triết học Descartes", "Luận văn cải thiện trí năng"],
      sourceUrl: "https://plato.stanford.edu/entries/spinoza/",
    },
  },
  {
    id: "rousseau",
    order: 10,
    levelId: 4,
    name: "Jean-Jacques Rousseau",
    era: "1712-1778",
    origin: "Geneva và Pháp",
    image: "/portraits/rousseau.webp",
    idea: "Một xã hội chính đáng cần tôn trọng tự do và ý chí chung của công dân.",
    story: {
      summary:
        "Jean-Jacques Rousseau là nhà triết học, nhà văn, nhà soạn nhạc và cây bút tự thuật quan trọng của thời Khai sáng. Ông đặt ra một câu hỏi khó vẫn còn hiện đại: làm sao con người có thể sống cùng nhau dưới luật pháp mà không đánh mất tự do.",
      chapters: [
        {
          title: "Từ Geneva đến Paris",
          body:
            "Rousseau sinh năm 1712 tại thành bang Geneva. Mẹ mất chỉ chín ngày sau khi ông chào đời. Sau tuổi thơ không ổn định và thời gian học nghề khắc dấu, ông rời Geneva khi mười sáu tuổi, trải qua nhiều công việc và hành trình trước khi đến Paris và gặp các nhân vật của phong trào Khai sáng.",
        },
        {
          title: "Bất bình đẳng, giáo dục và tự do",
          body:
            "Rousseau phê phán cách đời sống xã hội có thể tạo ra sự lệ thuộc, tha hóa và bất bình đẳng. Trong Khế ước xã hội, ông suy nghĩ về ý chí chung và mối quan hệ giữa tự do với thẩm quyền chính trị. Trong Émile, ông trình bày những suy tư có ảnh hưởng lớn về giáo dục.",
        },
        {
          title: "Một di sản vừa mạnh mẽ vừa phức tạp",
          body:
            "Rousseau góp phần định hình tư tưởng chính trị, văn học tự thuật và chủ nghĩa lãng mạn. Cũng cần nhìn thẳng vào nghịch lý trong đời ông: theo lời tự thuật, năm người con của Rousseau và Thérèse Levasseur đều bị gửi vào nhà nuôi trẻ bị bỏ rơi, một quyết định về sau bị dùng để phê phán ông.",
        },
      ],
      works: ["Luận về nguồn gốc và cơ sở của bất bình đẳng", "Khế ước xã hội", "Émile", "Những lời thú nhận"],
      sourceUrl: "https://plato.stanford.edu/entries/rousseau/",
    },
  },
  {
    id: "kant",
    order: 11,
    levelId: 4,
    name: "Immanuel Kant",
    era: "1724-1804",
    origin: "Königsberg, Phổ",
    image: "/portraits/kant.webp",
    idea: "Hãy đối xử với con người như mục đích, không chỉ như công cụ.",
    story: {
      summary:
        "Immanuel Kant sinh năm 1724 tại Königsberg, thủ phủ Đông Phổ khi đó. Từ một thành phố xa các trung tâm lớn, ông thực hiện một dự án trí tuệ tham vọng: xác định giới hạn của tri thức, nền tảng của đạo đức và quan hệ giữa tự do với thế giới tự nhiên.",
      chapters: [
        {
          title: "Một học giả của Königsberg",
          body:
            "Kant sinh trong một gia đình thợ thủ công có điều kiện khiêm tốn. Ông học tại Đại học Königsberg, nơi triết học khi ấy bao gồm cả toán học, vật lý, logic, siêu hình học, đạo đức và luật tự nhiên. Quá trình giảng dạy và nghiên cứu lâu dài của ông diễn ra chủ yếu tại chính thành phố này.",
        },
        {
          title: "Cuộc cách mạng Copernicus trong triết học",
          body:
            "Trong Phê phán lý tính thuần túy, Kant hỏi điều kiện nào khiến kinh nghiệm và tri thức khách quan trở nên khả dĩ. Thay vì coi tâm trí là tấm gương thụ động, ông phân tích vai trò chủ động của các cấu trúc nhận thức trong cách ta trải nghiệm thế giới.",
        },
        {
          title: "Tự trị và phẩm giá con người",
          body:
            "Trong đạo đức học, Kant gắn tự do với khả năng tự đặt ra và tuân theo nguyên tắc phổ quát bằng lý trí. Một công thức nổi tiếng của mệnh lệnh tuyệt đối yêu cầu không đối xử với con người chỉ như phương tiện, mà luôn đồng thời như mục đích.",
        },
      ],
      works: ["Phê phán lý tính thuần túy", "Đặt nền cho siêu hình học về đạo đức", "Phê phán lý tính thực hành", "Phê phán năng lực phán đoán"],
      sourceUrl: "https://plato.stanford.edu/entries/kant/",
    },
  },
  {
    id: "hegel",
    order: 12,
    levelId: 4,
    name: "G. W. F. Hegel",
    era: "1770-1831",
    origin: "Đức",
    image: "/portraits/hegel.webp",
    idea: "Ý thức về tự do phát triển qua xung đột, phủ định và hòa giải trong lịch sử.",
    story: {
      summary:
        "G. W. F. Hegel là một nhân vật trung tâm của chủ nghĩa duy tâm Đức sau Kant. Ông tìm cách hiểu tư duy, lịch sử, xã hội và nghệ thuật như những phần liên kết của một hệ thống đang vận động, thay vì những mảnh rời rạc.",
      chapters: [
        {
          title: "Tübingen, Jena và thế hệ sau Kant",
          body:
            "Hegel sinh năm 1770 tại Stuttgart và học triết học rồi thần học tại Tübingen từ 1788 đến 1793. Tại đây, ông kết bạn với Friedrich Hölderlin và Friedrich Schelling. Năm 1801, Hegel đến Jena, một trung tâm quan trọng của triết học hậu Kant.",
        },
        {
          title: "Tinh thần không đứng yên",
          body:
            "Hegel xem nhận thức và đời sống xã hội là những quá trình phát triển qua căng thẳng, phủ định và sự vượt qua giới hạn trước đó. Cách đọc Hegel vẫn gây tranh luận, nhưng có một điều rõ ràng: triết học của ông chống lại việc biến lịch sử thành một danh sách sự kiện không liên hệ.",
        },
        {
          title: "Một ảnh hưởng phân nhánh rộng",
          body:
            "Hiện tượng học tinh thần, Khoa học logic và các trước tác về pháp quyền tạo ra ảnh hưởng lớn đối với triết học thế kỷ XIX và XX. Những người kế thừa Hegel đi theo nhiều hướng khác nhau, từ triết học chính trị đến thần học và phê bình xã hội.",
        },
      ],
      works: ["Hiện tượng học tinh thần", "Khoa học logic", "Bách khoa thư các khoa học triết học", "Các nguyên lý của triết học pháp quyền"],
      sourceUrl: "https://plato.stanford.edu/entries/hegel/",
    },
  },
  {
    id: "kierkegaard",
    order: 13,
    levelId: 5,
    name: "Søren Kierkegaard",
    era: "1813-1855",
    origin: "Copenhagen, Đan Mạch",
    image: "/portraits/kierkegaard.webp",
    idea: "Lựa chọn cá nhân không thể được sống thay bởi một hệ thống trừu tượng.",
    story: {
      summary:
        "Søren Kierkegaard dành phần lớn cuộc đời tại Copenhagen và viết về việc trở thành một con người hữu hạn, cụ thể. Ông không muốn người đọc trú ẩn trong một hệ thống trừu tượng; ông muốn mỗi người đối diện với lựa chọn, lo âu, tuyệt vọng, trách nhiệm và đức tin của chính mình.",
      chapters: [
        {
          title: "Một đời sống quanh Copenhagen",
          body:
            "Kierkegaard sinh ngày 5 tháng 5 năm 1813, là con út trong gia đình bảy người con. Ông học thần học và triết học tại Đại học Copenhagen, hoàn thành luận văn về khái niệm mỉa mai với sự quy chiếu liên tục tới Socrates. Dù đủ điều kiện để trở thành mục sư, ông không được phong chức.",
        },
        {
          title: "Regine Olsen và giới hạn của suy đoán",
          body:
            "Năm 1840, Kierkegaard đính hôn với Regine Olsen rồi chủ động chấm dứt hôn ước. Các lý do sâu xa vẫn không hoàn toàn rõ và đã tạo ra nhiều suy đoán. Mối quan hệ này xuất hiện như một nền căng thẳng trong cách độc giả tiếp cận nhiều tác phẩm của ông, nhưng không nên giản lược toàn bộ triết học Kierkegaard thành một chuyện tình dang dở.",
        },
        {
          title: "Viết bằng nhiều giọng nói",
          body:
            "Kierkegaard dùng bút danh và nhiều thể loại để đặt các quan điểm khác nhau cạnh nhau. Ông phân tích các cách sống thẩm mỹ, đạo đức và tôn giáo, đồng thời phê phán một thời đại mà theo ông đã quên mất ý nghĩa của việc tồn tại như một cá nhân.",
        },
      ],
      works: ["Hoặc là/Hoặc là", "Sợ hãi và run rẩy", "Khái niệm lo âu", "Căn bệnh đến chết"],
      sourceUrl: "https://plato.stanford.edu/entries/kierkegaard/",
    },
  },
  {
    id: "nietzsche",
    order: 14,
    levelId: 5,
    name: "Friedrich Nietzsche",
    era: "1844-1900",
    origin: "Đức và Thụy Sĩ",
    image: "/portraits/nietzsche.webp",
    idea: "Khi các giá trị cũ lung lay, con người phải gánh trách nhiệm sáng tạo giá trị mới.",
    story: {
      summary:
        "Friedrich Nietzsche là nhà ngữ văn cổ điển trở thành một trong những tiếng nói sắc bén và gây tranh luận nhất của triết học hiện đại. Ông phân tích nguồn gốc của các giá trị, phê phán nhiều thói quen đạo đức và buộc người đọc hỏi một câu khó: ta sẽ sống thế nào khi các nền tảng cũ không còn hiển nhiên.",
      chapters: [
        {
          title: "Giáo sư trẻ tuổi ở Basel",
          body:
            "Nietzsche sinh năm 1844 tại Röcken. Năm 1869, khi hai mươi bốn tuổi, ông được bổ nhiệm vào ghế ngữ văn cổ điển tại Basel. Tác phẩm đầu tay Sự ra đời của bi kịch năm 1872 đã gây tranh luận vì kết hợp nghiên cứu Hy Lạp cổ với kỳ vọng phục hưng văn hóa qua nghệ thuật.",
        },
        {
          title: "Tách khỏi Wagner, rời khỏi học viện",
          body:
            "Nietzsche từng thân thiết với Richard Wagner, nhưng mối quan hệ dần rạn nứt trong thập niên 1870. Sức khỏe yếu khiến ông rời ghế giáo sư năm 1879. Những năm sau đó, ông viết các tác phẩm giàu châm ngôn, phân tích tâm lý và thử nghiệm phong cách trong khi liên tục di chuyển qua nhiều thành phố châu Âu.",
        },
        {
          title: "Đọc Nietzsche với sự cẩn trọng",
          body:
            "Nietzsche suy sụp sức khỏe vào đầu năm 1889 và không còn khả năng sáng tác trong phần đời còn lại. Các khái niệm như ý chí quyền lực, siêu nhân và sự tái diễn vĩnh cửu cần được đọc trong văn bản và bối cảnh cụ thể; chúng đã nhiều lần bị đơn giản hóa hoặc sử dụng sai lệch về sau.",
        },
      ],
      works: ["Sự ra đời của bi kịch", "Khoa học vui", "Zarathustra đã nói như thế", "Luận về phả hệ đạo đức"],
      sourceUrl: "https://plato.stanford.edu/entries/nietzsche/",
    },
  },
  {
    id: "beauvoir",
    order: 15,
    levelId: 5,
    name: "Simone de Beauvoir",
    era: "1908-1986",
    origin: "Paris, Pháp",
    image: "/portraits/beauvoir.webp",
    idea: "Bản sắc được định hình bởi cách ta sống và những cấu trúc xã hội quanh ta.",
    story: {
      summary:
        "Simone de Beauvoir là nhà văn, triết gia, nhà nữ quyền, trí thức công chúng và nhà hoạt động quan trọng của nước Pháp sau chiến tranh. Tác phẩm của bà cho thấy tự do không tồn tại trong khoảng không: nó luôn diễn ra giữa những giới hạn xã hội, quan hệ với người khác và trách nhiệm cụ thể.",
      chapters: [
        {
          title: "Một tiếng nói triết học độc lập",
          body:
            "Beauvoir sinh năm 1908 tại Paris và được đào tạo triết học nghiêm túc. Trong thời gian dài, bà thường bị xem chủ yếu qua mối quan hệ với Jean-Paul Sartre. Nghiên cứu về sau đã khẳng định rõ hơn những đóng góp độc lập của bà đối với hiện sinh, hiện tượng học, đạo đức và triết học nữ quyền.",
        },
        {
          title: "Tự do phải đi vào đời sống cụ thể",
          body:
            "Trong Đạo đức học của sự mơ hồ, Beauvoir phân tích tự do cùng trách nhiệm đối với người khác. Tới Giới tính thứ hai năm 1949, bà khảo sát cách phụ nữ bị đặt vào vị trí Kẻ Khác qua lịch sử và văn hóa, biến câu hỏi về tự do thành một vấn đề xã hội cụ thể.",
        },
        {
          title: "Viết qua nhiều hình thức",
          body:
            "Beauvoir không chỉ viết luận triết học. Tiểu thuyết, hồi ký, báo chí và tác phẩm về tuổi già đều giúp bà khảo sát kinh nghiệm sống, sự hữu hạn và những cấu trúc xã hội thường bị bỏ qua. Di sản của bà tiếp tục mở rộng các cuộc tranh luận trong và ngoài triết học.",
        },
      ],
      works: ["Đạo đức học của sự mơ hồ", "Giới tính thứ hai", "Khách mời", "Tuổi già"],
      sourceUrl: "https://plato.stanford.edu/entries/beauvoir/",
    },
  },
];

export function getDifficulty(levelId: number): Difficulty {
  return difficulties.find((difficulty) => difficulty.id === levelId) ?? difficulties[0];
}
