"use client";

import Navigation from "../../components/Navigation";
import Blurb from "../../components/Blurb";

export default function gamePage() {
  return (
    <div className="prose container mx-auto max-w-screen-md">
      <Navigation />
      <section>
        <h1 className="text-4xl font-bold mb-4">Game Design Document</h1>
        <p>
          Welcome to the game design document for RetroQuest: Chronicles of the
          Guildlands (Title pending). This document outlines the key aspects of
          the game, providing an overview of its concept, mechanics, and more.
        </p>
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
          Welcome to RetroQuest: Chronicles of the Guildlands (Title pending), a
          retro-inspired fantasy turn-based tactics game that draws inspiration
          from classic titles like X-Com: UFO Defense and Terror From The Deep.
          Prepare to embark on an epic journey as a new and aspiring guild
          leader, eager to carve your name in history and amass fortune by
          managing a guild of skilled adventurers.
        </p>

        {/* Key Features */}
        <h3 className="text-2xl font-bold mb-2">Key Features:</h3>
        <ol>
          <li>
            <strong>Hardcore and Deadly Combat:</strong> Engage in challenging
            turn-based tactical battles that demand strategic thinking and
            careful planning. Combat is unforgiving, and every decision matters.
            Death is permanent, and the loss of a skilled adventurer can be a
            devastating blow to your guild. Will you be able to keep your
            adventurers alive long enough to fulfill your quest and return back
            rich?
          </li>
          <li>
            <strong>Real-Time World Map:</strong> Explore a vast and dynamic
            world in real-time, filled with villages, towns, and mysterious
            locations such as crypts, dungeons, ruins and monstrous lairs. Your
            guild operates in a living, breathing world where events unfold, and
            time progresses. Keep a watchful eye on the ever-changing landscape
            as you decide which quests to undertake and where to send your
            adventurers.
          </li>
          <li>
            <strong>Base Management:</strong> Build and expand your guild
            headquarters, strategically placing facilities to enhance your
            adventurers' abilities and improve your overall guild efficiency.
            Manage resources, recruit new talent, and ensure your guild is
            well-equipped to face the challenges that lie ahead. Remember to
            build defenses however, as your guild will be vulnerable to
            retaliation by monsters and other hostile forces like opposing
            mercenary guilds.
          </li>
          <li>
            <strong>Technology Tree:</strong> Progress through multiple
            technology trees, unlocking new weapons, magical abilities, and
            strategic abilities. Research ancient knowledge, uncover lost
            artifacts, and stay ahead of the ever-evolving threats in your quest
            for fame and glory and riches.
          </li>
        </ol>

        {/* Progression and Narrative */}
        <h3 className="text-2xl font-bold mb-2">Progression and Narrative:</h3>
        <p>
          Begin your journey as a humble new guild leader, taking on quests for
          local villages and towns. As your renown grows and your successes
          multiply, catch the attention of the kingdom's lords and nobles. Be
          prepared to receive a critical quest that transcends the mundane,
          plunging you into a dark and perilous adventure to root out corruption
          and dismantle a demonic cult threatening the realm.
        </p>

        {/* Gameplay Experience */}
        <h3 className="text-2xl font-bold mb-2">Gameplay Experience:</h3>
        <p>
          Immerse yourself in a rich fantasy world where every decision shapes
          your destiny. You will have to recruit diverse adventurers, manage
          your resources and people, and make strategic choices in combat. Your
          leadership skills will be put to the test, and every wrong decision
          can be devastating. The combination of deadly encounters, a real-time
          world map, base management, and a technology tree creates a
          multifaceted gaming experience that promises hours of immersive
          gameplay.
        </p>
      </section>

      <section id="gameplay-mechanics">
        <h2 className="text-3xl font-bold mb-2">Gameplay Mechanics</h2>

        <section id="combat">
          <h3 className="text-2xl font-bold mb-2">Combat:</h3>
          <p>
            Engage in deadly isometric turn-based tactical combat where strategy
            and decision-making are crucial. Each adventurer you recruit has
            randomized stats and skills, and gain experience with every
            successful mission, but death is permanent! Consider terrain, cover,
            and enemy weaknesses to gain the upper hand in battles. Fight
            against a variety of enemies, including monsters, bandits, and rival
            mercenary guilds. Will you be able to keep your adventurers alive
            long enough for them to become legendary heroes?
          </p>

          <ul>
            <li>
              <strong>Your Adventurers:</strong> Your recruits are the lifeblood
              of your guild. Your first recruits will be weak and inexperienced,
              but with proper tactics and skill, even the low can fell the
              mighty. With a classless system, you can customize your
              adventurers to your liking, and with a variety of weapons, armor,
              equipment and spells to choose from, you can create truly diverse
              and unique parties.
            </li>
            <li>
              <strong>Your planning can save the day:</strong> Sending a party
              off into a dark, mysterious crypt? Make sure they have torches and
              lanterns to light the way. Fighting a group of bandits? Make sure
              your adventurers have ranged weapons to pick them off from afar.
              Knowledge and preparation are key, and equipping your adventurers
              with the right gear can make the difference between a successful
              mission and a total party wipe.
            </li>
            {/* Add more combat mechanics as needed */}
          </ul>
        </section>

        <section id="exploration">
          <h3 className="text-2xl font-bold mb-2">The Worldscape:</h3>
          <p>
            Organize your parties and manage quests on a real time procedurally
            generated world map, where time progresses and events unfold with or
            without your intervention. Send your adventurers to explore the
            world, uncovering new locations and opportunities for fame and
            fortune. As well, you can send out scouting parties or caravans to
            gather resources and information from the various locations on the
            map. Occasionally, you might even encounter other mercenary guilds,
            and you can choose to engage them in combat or negotiate with them,
            or even hire them to join your burgeoning guild.
          </p>

          <ul>
            <li>
              <strong>Dynamic Events:</strong> As your parties explore the
              world, they will encounter a variety of events, ranging from
              simple encounters with monsters or bandits, to more complex events
              such as a village being attacked by a dragon, or a noble
              requesting your aid in a quest. These events can be ignored, or
              you can choose to intervene, and your choices will impact your
              guild's reputation and influence in the surrounding lands. For
              example, if you refuse to help a village being attacked by
              bandits, your guild's reputation will suffer, and they may even
              refuse to let you recruit villagers in the future.
            </li>
            <li>
              <strong>Quests and Choices:</strong> As time progresses, you will
              be given simple quests by local villages and towns, such as
              clearing out a nearby crypt or dungeon, or escorting a caravan to
              a distant town. As your renown grows, you will be given more
              complex quests by the kingdom's lords and nobles, such as
              retrieving a lost artifact, or slaying a legendary beast. These
              quests can often be solved in different ways, and your success or
              failure will impact those quest givers opinion of you.
            </li>
            {/* Add more exploration mechanics as needed */}
          </ul>
        </section>

        <section id="base-management">
          <h3 className="text-2xl font-bold mb-2">Base Management</h3>
          <p>
            Beginning with an old tavern, you will have to build and expand your
            guild headquarters, adding new sections and facilities to improve
            your guilds efficiency and capabilities. Build stables to house your
            mounts, a library to research new technologies, or a training
            grounds to hone your adventurers skills. If you are successful
            enough, you may even be able to turn your guildhall into a mighty
            fortress, complete with walls, towers, and defensive structures, or
            build a new guildhall in a different locations to expand your
            influence.
          </p>

          <ul>
            <li>
              <strong>Size and Scope</strong> Your guildhall begins as a simple
              tavern and with every addition you will have to pay resources and
              taxes. As your guildhall grows, so will your expenses, and you
              will have to manage your finances carefully to ensure you can
              afford the monthly upkeep. If you fail to pay your taxes, your
              guildhall will be seized by the local lord, and you will have to
              start over, unless you have a second base to cover the costs.
            </li>
            <li>
              <strong>Resource Management:</strong> Aside from gold and people,
              you will have to manage a variety of different resources such as
              food, drink, magical tomes, and steel. These resources are used to
              build new facilities, research new technologies and create new
              equipment. You can gather resources by sending parties to mines or
              lumberyards, or by trading with local villages and towns. As well,
              you can send out caravans to gather more exotic resources from
              distant locations, but be careful, as these caravans are
              vulnerable to attack by monsters and bandits.
            </li>
            {/* Add more base management mechanics as needed */}
          </ul>
        </section>

        <section id="technology-tree">
          <h3 className="text-2xl font-bold mb-2">Technology Tree</h3>
          <p>
            Whether its learning new smithing methods to speed up production, or
            researching new spells for your magically inclined adventurers, the
            technology tree will be a key part of your guild's progression. As
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

        <p>
          WORK IN PROGRESS
        </p>
      </section>

      <section id="audio">
        <h2 className="text-3xl font-bold mb-2">Audio</h2>

        <p>
          WORK IN PROGRESS
        </p>
      </section>

      

      {/* Add more sections as needed */}
      <Blurb />
    </div>
  );
}
