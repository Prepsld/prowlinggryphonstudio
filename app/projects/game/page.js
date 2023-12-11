"use client";

import Navigation from "../../components/Navigation";
import Blurb from "../../components/Blurb";
// RetroQuest: Chronicles of the Guildlands (Title pending)
export default function gamePage() {
  return (
    <div className="prose container mx-auto max-w-screen-md">
      <Navigation />
      <section>
        <h1 className="text-4xl font-bold mb-4">
          RetroQuest: Chronicles of the Guildlands
        </h1>
        <p>
          Welcome to my game project page! This page will serve as a central hub
          for all information related to my game, starting with my design
          document, and eventually code snippets or images. This page serves as
          both a way for me to organize my thoughts and ideas as well as a way
          to force myself to actually work towards a goal. I will be attempting
          to update this page once I begin, and posting my progress as updates,
          however infrequent!
        </p>
        <h3>
          NOTE: Most of the text here has been generated using an AI. I plan on
          modifying and editing the text as time progresses, but this should
          give a simple overview of what ideas I have for my game.
        </h3>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-2">Table of Contents</h2>
        <ul>
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#gameplay-mechanics">Gameplay Mechanics</a>
          </li>
          <li>
            <a href="#storyline">Storyline</a>
          </li>
          <li>
            <a href="#recruitment-and-adventurers">
              Recruitment and Adventurers
            </a>
          </li>
          <li>
            <a href="#world-generation-and-environments">
              World Generation and Environments
            </a>
          </li>
          <li>
            <a href="#art-and-design">Art and Design</a>
          </li>
          <li>
            <a href="#audio">Audio</a>
          </li>

          {/* Add more sections as needed */}
        </ul>
      </section>

      <section id="overview">
        {/* Overview Section Content */}
        <h2 className="text-3xl font-bold mb-2">Overview</h2>
        <p>
          Welcome to RetroQuest: Chronicles of the Guildlands (Title pending),
          my dream goal. This game is a real time strategy / turn based tactical
          combat simulator, where you take control of a guildhall and manage
          your people and supplies as you send your adventurers out into the
          world to complete quests, gather resources, and fight monsters. The
          game is heavily inspired by one of my favorite games of all time,
          X-COM: UFO Defense, and I hope to capture the same feeling of dread
          and excitement as you send your adventurers out into the world, never
          knowing if they will return alive or not.
        </p>

        {/* Key Features */}
        <h3 className="text-2xl font-bold mb-2">Key Features:</h3>
        <ol>
          <li>
            <strong>Hardcore and Deadly Combat:</strong> The main focus of the
            game is the turn based isometric tactics screen. When your
            adventurers arrive at a location, the screen shifts to an isometric
            grid. Here, you will have to explore, fight, and loot your way
            through the location, all while managing your parties health and
            resources. Combat is deadly and quick, and a single mistake can
            spell the end for one or more of your adventurers.
          </li>
          <li>
            <strong>Real-Time World Map:</strong> Outside of the combat, you
            will watch over a world map with real time progression. As time
            passes, new quests will arrive at your base of operations, as well
            as news or other random events. You will have to manage your
            resources and reputation in order to ensure you stay in business and
            thrive. Send parties out to explore new locations, gather resources,
            or set out to find new quests, and watch as your parties travel
            across the map and potentially meet new encounters on their way.
          </li>
          <li>
            <strong>Base Management:</strong> Starting out with nothing but a
            small tavern and a few willing recruits, you will eventually build
            and expand your guildhall, adding new facilities and improving
            existing ones to support your business. Eventually, you might even
            expand and build new guildhalls, or turn your existing one into the
            likes of a mighty fortress, for competition is tough, and other
            jealous mercenary guilds might retaliate against you.
          </li>
          <li>
            <strong>Technology Tree:</strong> The game will eventually
            incorporate three distinct technology trees: Arcane, Martial, and
            Innovation. Each tree will require its own facility and unique
            workers, and will give you opportunities to unlock new equipment,
            spells, and facilities. As one example, building a library and
            hiring scholars will allow you to research new spells and magical
            equipment, while building a smithy and hiring blacksmiths will allow
            you to research and craft new equipment and armor from the resources
            your party gathers. the Innovation tree meanwhile, will give you new
            abilities to expand and better manage your guild, from bartering for
            better prices to sending specialized recruiters to find new talent.
          </li>
        </ol>

        {/* Progression and Narrative */}
        <h3 className="text-2xl font-bold mb-2">Progression and Narrative:</h3>
        <p>
          Begin your journey as a humble new guild leader, taking on simple
          quests for the nearby friendly locations, such as clearing a small
          bandit camp or hunting a dangerous wolf pack. As you complete quests
          and gain renown, you will be given more complex and dangerous quests,
          such as clearing out a nearby crypt or escorting a caravan to a
          distant town. Eventually, you will be given a pivotal quest by the
          kingdom's authorities, tasking you with investigating a demonic cult
          that has been gaining more and more infamy. However, you are free to
          accept or reject any quests you are given, but be aware that your
          reputation and fame matters. Refusing to accept too many quests will
          cause your reputation to suffer, and you might be forced to close your
          guildhall for good!
        </p>

        {/* Gameplay Experience */}
        <h3 className="text-2xl font-bold mb-2">Gameplay Experience:</h3>
        <p>
          I want this game to have a grounded, lower fantasy feel to it. Magic
          exists but it is rare and powerful. There are many races, but they
          feel alien to regular humans. The world is dangerous, and even a lowly
          bandit can easily slay one of your own adventurers with a lucky blow.
          Death is cheap, and you will have to get used to loss. However, with
          proper planning and strategy, even the lowliest of recruits can become
          a legendary hero. Only once you have proven your experience as a
          successful guild will you be given opportunities to recover magical
          artifacts or slay/ capture powerful monsters, and even then you will
          have to be careful, for even the most powerful of adventurers can be
          felled low.
        </p>
      </section>

      <section id="gameplay-mechanics">
        <h2 className="text-3xl font-bold mb-2">Gameplay Mechanics</h2>

        <section id="combat">
          <h3 className="text-2xl font-bold mb-2">Combat:</h3>
          <p>
            Combat is the heart of this game. Taking place on an isometric grid,
            you will have to navigate a randomly generated dungeon or lair,
            fighting monsters and looting treasure as you go. Combat is turn
            based, with each "team" taking a turn for all their units. Each unit
            has a certain amount of action points which they can use to move,
            turn, attack, or use items or environmental objects. Combat is
            deadly and quick, with every blow being deadly to unprepared
            mortals. Preparation is key, as knowing what you are about to face
            can give you the edge you need to overcome the odds. Your parties
            will almost always be either outnumbered or outmatched, and it's up
            to you to ensure they are prepared for the challenges ahead.
          </p>

          <ul>
            <li>
              <strong>Your Adventurers:</strong> Your recruits are the lifeblood
              of your guild. Your first recruits will be weak and inexperienced,
              but with proper tactics and skill, even the humblest recruit can
              bring low the mighty. With a classless system, you can customize
              your adventurers to your liking, and with a variety of weapons,
              armor, equipment and spells to choose from, you can create truly
              diverse and unique parties.
            </li>
            <li>
              <strong>Your planning can save the day:</strong> Sending a party
              off into a dark, mysterious crypt? Make sure they have torches and
              lanterns to light the way. Hunting a werewolf and his pack? Make
              sure to bring silver plated weapons and armor. Preparation is key,
              and it is up to you to discover and determine the most effective
              way to accomplish your goals.
            </li>
            <li>
              <strong>Live to fight another day:</strong> Missions are not all
              or nothing. If you are in over your head, you can always retreat
              your party and try to recuperate some of your losses. While this
              wont bode well for a quest giver, it is better than losing your
              entire party. As well, if your only goal is to explore a location
              or recover an item, fighting to the death isn't always necessary.
              You can always try to sneak past enemies, or use your hardiest
              adventurers to distract enemies while your stealthy ones can
              complete the objectives quickly.
            </li>
            {/* Add more combat mechanics as needed */}
          </ul>
        </section>

        <section id="exploration">
          <h3 className="text-2xl font-bold mb-2">The Worldscape:</h3>
          <p>
            The second largest aspect of the game, the Worldscape is where you
            will plan out your quests, manage your bases, and oversee the world
            as real time progresses. You will see your moving parties, neutral
            or enemy parties, as well as places of interest, such as villages or
            dungeons. As well, you will always be able to see your current
            finances and time, so you can prepare accordingly when one of your
            parties will arrive at a location. Random events will occur, and its
            up to you to engage or avoid them... if you can!
          </p>

          <ul>
            <li>
              <strong>Dynamic Events:</strong> As your parties explore the
              world, they will encounter a variety of events, ranging from
              simple encounters with traders or bandits, to more complex events
              such as a village being attacked by a dragon, or a noble
              requesting your aid in a quest. These events can be ignored, or
              you can choose to intervene, and your choices will impact your
              guild's reputation and influence. For example, if you refuse to
              help a village being attacked by bandits, your guild's reputation
              will suffer, and they may even refuse to let you recruit villagers
              in the future until you make amends.
            </li>
            <li>
              <strong>Quests and Choices:</strong> When you start the game, you
              will only be given simple tasks by local villages and towns, such
              as clearing out a nearby crypt or dungeon, or escorting a caravan
              to a distant village. As your renown grows however, you will be
              given more difficult and serious quests by the kingdom's lords and
              nobles, such as retrieving a lost artifact, or slaying a legendary
              beast. These quests can sometimes be solved in different ways, and
              your success or failure will impact those quest givers opinion of
              you.
            </li>
            {/* Add more exploration mechanics as needed */}
          </ul>
        </section>

        <section id="base-management">
          <h3 className="text-2xl font-bold mb-2">Base Management</h3>
          <p>
            Beginning with an old tavern, you will have to build and expand your
            guild headquarters, adding new facilities to improve your guilds
            efficiency and capabilities. Build stables to house your mounts, a
            library to research new technologies, or a training grounds to hone
            your adventurers physical skills. Every facility is placed on a
            top-down grid, and you will have total freedom to design your
            guildhall as you see fit. Want to create a fortress manned by
            heavily armored knights? Or perhaps a magical academy filled with
            wizards and scholars? The choice is yours.
          </p>

          <ul>
            <li>
              <strong>Size and Scope:</strong> Your guildhall small, with only a
              wooden fence and sleeping quarters for your first party. With
              every addition you will have to pay resources and taxes. As your
              guildhall grows, so will your expenses, and you will have to
              manage your finances carefully to ensure you can afford the
              monthly upkeep. If you fail to pay your taxes, your guildhall will
              be seized by the local lord, and you will have to start over,
              unless you have a second base to cover the costs.
            </li>
            <li>
              <strong>Resource Management:</strong> Aside from gold and
              manpower, you will have to manage a variety of different resources
              such as food, drink, magical tomes, and ores of different types.
              These resources are used to build new facilities, research new
              technologies and create new equipment. You can gather resources by
              sending parties to mines or lumberyards, or by trading with local
              villages and towns. As well, you can send out caravans to gather
              more exotic resources from distant locations, but be sure to send
              skilled adventurers, as these caravans are vulnerable to attack by
              monsters and bandits.
            </li>
            <li>
              <strong>Be as dependant or free as you wish:</strong> When it comes to gathering your people and resources, 
              you are given the freedom to determine how you accomplish your goals. You can choose to sign contracts with nearby villages
               and towns for supplies in return for completing quests, or you can choose to build your own facilities and halls to gather your own 
               resources. As long as the taxes get paid, the lords of the land don't care how you get your materials.
            </li>
            {/* Add more base management mechanics as needed */}
          </ul>
        </section>

        <section id="technology-tree">
          <h3 className="text-2xl font-bold mb-2">Technology Tree</h3>
          <p>
            Whether its learning new smithing methods to speed up production or create new metals, or
            researching new spells for your magically inclined adventurers, the
             three technology trees will be a key part of your guild's progression. As
            you complete quests and expand your guildhall, you will gain access
            to new technologies, allowing you to create new equipment and
            spells, and even newer, advanced facilities such as a dwarven forge,
            or a wizards spire.
          </p>

          <ul>
            <li>
              <strong>Research Progression:</strong> Recruit specialized
              scholars and smiths to research new technologies, and build the
              appropriate facilities for them to work in. As your guildhall
              grows, you will gain access to more advanced technologies,
              allowing you to create more powerful equipment and research more
              powerful spells. You might even be able to create your own magical
              items with enough research and resources!
            </li>
            <li>
              <strong>Artifact Discovery:</strong> With great power comes great
              treasure, and as you explore the world, you will uncover lost
              artifacts and ancient knowledge. These artifacts can be used to
              unlock new technologies, or serve as a powerful boon for your
              favorite adventurer. As well, you can sell these artifacts for a
              hefty profit, but be careful, as some artifacts may be cursed,
              requiring you to learn rituals to purify the items before they
              bring misfortune to your guild.
            </li>
            <li>
              <strong>The Magical Tree:</strong> Hiring arcane scholars and giving them the space in a library will allow you to research
              new spells, as well as discover which of your recruits has magical potential. As well, you will be able to research new magical items, or use
              rituals on the worldmap to gain powerful boons or remove curses from artifacts.
            </li>
            <li>
              <strong>The Martial Tree:</strong> By hiring blacksmiths and giving them the space in a smithy, you will be able to improve your guilds equipment, craft new items, 
              and research new materials and techniques to improve their efficiency. They will be able to directly take the resources you gather and turn them into weapons, armor and 
              other equipment for your adventurers out in the field. 
            </li>
            <li>
              <strong>The Innovation Tree:</strong> By hiring specialized researchers and recruiters, you will be able to improve 
              the non combat, non magical aspects of your guild. You will be able to research topics such as new medicines, better living quarters,
              or even new techniques for haggling and bartering, or negotiating quests for better pay. Finally, research down this tree will allow you to recruit better and more 
              specialized / experienced recruits, or even allow you to tame and train different beasts to use as mounts or companions. After all,
              why walk to your quest location when you could instead ride a mighty gryphon or drake?
            </li>
            {/* Add more technology tree mechanics as needed */}
          </ul>
        </section>
      </section>

      <section id="storyline">
        <h2 className="text-3xl font-bold mb-2">Storyline</h2>

        <p>
          In RetroQuest: Chronicles of the Guildlands (Title pending), the
          narrative is driven by your choices and the path you carve for your
          guild. There isn't a predefined storyline until the later stages of
          the game; instead, you have the freedom to shape your guild's destiny
          and influence the world around you. As a new and ambitious guild
          leader, you'll embark on a journey of fame, fortune, and treacherous
          challenges.
        </p>

        <h3 className="text-2xl font-bold mb-2">Guild Development</h3>
        <p>
          You begin the game as a newly retired adventurer, starting a new
          guildhall with the proceeds of your adventuring career. You will have
          to recruit new adventurers, manage your resources, and complete quests
          to gain new wealth and renown. As your guild grows, you will gain the
          attention of more important peoples, and you will be given more
          dangerous and complex quests. Finally, when you have made a successful
          name for yourself, heard all across the region, you will be given a
          pivotal quest by the kingdom's authorities, plunging you into a dark
          and perilous adventure to root out corruption and dismantle a demonic
          cult threatening the realm.
        </p>

        <h3 className="text-2xl font-bold mb-2">Freedom of Choice</h3>
        <p>
          Do you want your guild to specialize in magical warriors and wizards?
          Or perhaps you shun magic entirely, recruiting only the most skilled
          warriors and archers? Maybe perhaps you prefer skill and sublety,
          training your recruits to use tools and specialized items to sneak
          into dungeons and accomplish tasks with as little combat as possible?
          The choice is yours, and your decisions will shape your guild's
          destiny.
        </p>

        <h3 className="text-2xl font-bold mb-2">The Ultimate Goal</h3>
        <p>
          As your guild progresses and gains significant fame, you will finally
          be given a task from the highest authorities in the realm, tasking you
          to investigate a demonic cult that has been gaining more and more
          infamy. You will have to send your adventurers out into the world,
          gathering information and clues, and eventually you will have to
          confront the cult itself, and destroy it by the roots before they can
          unleash their dark plans upon the realm.
        </p>

        <h3 className="text-2xl font-bold mb-2">Epic Showdown</h3>
        <p>
          Prepare your guild for the ultimate challenges. Explore dark and
          dangerous realms, equip your adventurers with legendary equipment, and
          delve into the heart of the cult's operations. Face the most powerful
          enemies you have ever encountered, mighty demons and their devoted
          cultists. In the end, you will have to enter the portal itself, and
          descend into hell to confront the overlord, and close the portal from
          within. Will you be able to save the realm from the ultimate threat?
        </p>

        <p>
          Will your guild rise to the occasion, or will you fail and doom the
          realm to a dark and terrible fate? Only with the skills, cunning and
          bravery of your adventurers will you be able to save the realm.
        </p>
      </section>

      <section id="recruitment-and-adventurers">
        <h2 className="text-3xl font-bold mb-2">Recruitment and Adventurers</h2>

        <p>
          In RetroQuest: Chronicles of the Guildlands (Title pending), the heart
          of your guild lies in the diverse group of individuals you recruit.
          Unlike traditional character-focused games, your guild is built upon
          the shoulders of villagers of all shapes, sizes, and races. Embrace a
          classless system that allows you to shape and mold your recruits into
          the adventurers you desire, each with their own unique strengths and
          weaknesses.
        </p>

        <h3 className="text-2xl font-bold mb-2">Classless System</h3>
        <p>
          Say goodbye to predefined character classes. Each recruit is a blank
          slate with random attributes and skills, and it's up to you to train
          and guide them. While the potential is vast, not every recruit is
          capable of mastering every skill. Some may struggle with certain
          weapons, while others might lack the physical resilience for melee
          combat, or be entirely incapable of magical ability. Embrace the
          challenge of working with what you get, utilizing strengths, and
          mitigating weaknesses to turn recruits into successful heroes.
        </p>

        <h3 className="text-2xl font-bold mb-2">Randomness and Adaptability</h3>
        <p>
          The recruitment process is unpredictable. You never know what kind of
          potential recruit your guild will receive until they arrive. Some may
          excel in multiple categories, or be limited to a single talent or
          profession. Others may possess a natural aptitude for magic, or
          trained their entire life with a single weapon. Adaptability is key;
          learn to leverage the unique attributes of each recruit and tailor
          your strategies accordingly.
        </p>

        <h3 className="text-2xl font-bold mb-2">Race and Diversity</h3>
        <p>
          As your guild gains renown, you'll unlock the ability to recruit
          individuals from different races such as dwarves, elves, ogres or
          kobolds, as well as many more you might meet along your adventures.
          With the right heroes and facilities, you will even be able to tame
          and train powerful beasts, like drakes, gryphons and wyrms.
        </p>

        <h3 className="text-2xl font-bold mb-2">Recruitment Strategies</h3>
        <p>
          Progressing in the game and research trees will allow you to further
          refine your recruitment process. Send recruiters out to search for
          recruits with specific talents, stats, or unique abilities. Tailor
          your guild to meet the demands of specific quests or challenges by
          strategically seeking out recruits with desired traits, or by training
          your existing recruits to meet the challenges ahead. The choice is
          yours.
        </p>

        <p>
          The success of your guild rests on your ability to recognize potential
          in every recruit and adapt your strategies based on their unique
          qualities. Can you turn the most unlikely villagers into legendary
          adventurers?
        </p>
      </section>

      <section id="world-generation-and-environments">
        <h2 className="text-3xl font-bold mb-2">
          World Generation and Environments
        </h2>

        <p>
          Explore a dynamically generated world in RetroQuest: Chronicles of the
          Guildlands (Title pending), where both the macro and micro aspects are
          procedurally crafted to provide a unique and immersive experience. The
          game world is procedurally generated, offering a vast canvas of
          diverse environments, each with its own challenges and opportunities.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Procedurally Generated World Map
        </h3>
        <p>
          The world map, generated with either a specific seed or one you input
          manually, is the canvas upon which your guild's adventures unfold. It
          features a variety of environments, including villages, towns, and
          places of interest such as dungeons and lairs, as well as biomes such
          as dense forests, snowy and rocky mountains, or even hilly plains.
          Each playthrough offers a new and unpredictable landscape for you to
          explore.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Isometric Maps for Turn-Based Exploration
        </h3>
        <p>
          When your party arrives at a location, the isometric map is
          dynamically generated based on the environment and biome of that
          specific location on the world map. The map is then modified according
          to the type of place, ensuring that a dungeon in a desert environment
          feels distinct from a dungeon in a forest, both in appearance and the
          creatures that inhabit it.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Dynamic City and Village Generation
        </h3>
        <p>
          Even cities and villages are subject to procedural generation, with
          sections generated by "blueprints" that are randomly selected and
          placed. This ensures that each city or village feels unique, and that
          you will never see the same layout twice.
        </p>
      </section>

      <section id="art-and-design">
        <h2 className="text-3xl font-bold mb-2">Art and Design</h2>

        <p>WORK IN PROGRESS</p>
      </section>

      <section id="audio">
        <h2 className="text-3xl font-bold mb-2">Audio</h2>

        <p>WORK IN PROGRESS</p>
      </section>

      {/* Add more sections as needed */}
      <Blurb />
    </div>
  );
}
